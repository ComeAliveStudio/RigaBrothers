"use client";

import { useEffect, useState } from "react";
import { supabasePublic } from "@/lib/supabase";

type Section = {
  id: string;
  section_key: string;
  title: string | null;
  body: string | null;
  sort_order: number;
};

type StorageFile = {
  name: string;
  url: string;
};

const BUCKET = "press-kit";

export function PressKitContent() {
  const [sections, setSections] = useState<Section[] | null>(null);
  const [files, setFiles] = useState<StorageFile[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const supabase = supabasePublic();
      try {
        const { data } = await supabase
          .from("press_kit_sections")
          .select("id, section_key, title, body, sort_order")
          .order("sort_order", { ascending: true });
        if (!cancelled) setSections(data ?? []);
      } catch {
        if (!cancelled) setSections([]);
      }

      try {
        const { data } = await supabase.storage.from(BUCKET).list("", {
          sortBy: { column: "name", order: "asc" },
        });
        if (!cancelled && data) {
          const withUrls = data
            .filter((f) => f.id) // skip folder placeholders
            .map((f) => ({
              name: f.name,
              url: supabase.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl,
            }));
          setFiles(withUrls);
        }
      } catch {
        if (!cancelled) setFiles([]);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!loaded) {
    return <p className="legal-updated">Loading press kit…</p>;
  }

  const hasContent = (sections && sections.length > 0) || files.length > 0;

  if (!hasContent) {
    return (
      <>
        <p className="legal-updated">Content coming soon</p>
        <p>
          The full press sheet is being finalized. In the meantime, reach out directly at{" "}
          <a href="mailto:crowdfunding@rigabrothers.com">crowdfunding@rigabrothers.com</a>.
        </p>
      </>
    );
  }

  return (
    <>
      {sections?.map((section) => (
        <div key={section.id}>
          {section.title && <h2>{section.title}</h2>}
          {section.body?.split("\n").map((line, i) =>
            line.trim() ? <p key={i}>{line}</p> : null
          )}
        </div>
      ))}

      {files.length > 0 && (
        <div className="legal-contact">
          <h2>Downloads</h2>
          <ul>
            {files.map((file) => (
              <li key={file.name}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
