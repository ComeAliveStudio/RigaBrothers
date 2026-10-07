import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Riga Brothers",
  description: "Privacy Policy for the Riga Brothers documentary crowdfunding campaign",
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-wrap">
      <p className="legal-brand">RIGA BROTHERS</p>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated · 13th July 2026</p>

      <p>
        This Privacy Policy explains how <strong>Topanga Film</strong>, a sole proprietorship (ditta
        individuale) registered in Italy, with registered office at Via Roma, 14, 21013 Gallarate (VA),
        Italy, VAT/Tax ID <strong>[P.IVA / CODICE FISCALE — DA CONFERMARE]</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        &ldquo;our&rdquo;), collects, uses, and protects your personal data when you visit rigabrothers.com or
        make a pledge in support of the Riga Brothers documentary.
      </p>

      <p>This policy is issued in accordance with the EU General Data Protection Regulation (GDPR).</p>

      <h2>1 · Data Controller</h2>
      <div className="legal-contact">
        <strong>Topanga Film</strong>
        <br />
        Owner: <strong>[NOME TITOLARE — da confermare]</strong>
        <br />
        Via Roma, 14 · 21013 Gallarate (VA), Italy
        <br />
        Email: <a href="mailto:crowdfunding@rigabrothers.com">crowdfunding@rigabrothers.com</a>
      </div>

      <h2>2 · What Data We Collect</h2>
      <ul>
        <li><strong>Pledge information</strong>: name, email address, billing details processed via Stripe when you make a pledge</li>
        <li><strong>Reward fulfillment data</strong>: shipping address, if your selected reward tier requires physical delivery</li>
        <li><strong>Technical data</strong>: IP address, browser type, device information, and general usage data collected automatically when you visit the Site</li>
        <li><strong>Communication data</strong>: any information you provide when contacting us directly</li>
      </ul>
      <p>We do not directly collect or store your full payment card details — these are handled exclusively by our payment processor, Stripe.</p>

      <h2>3 · Why We Collect It (Legal Basis)</h2>
      <table className="legal-table">
        <tbody>
          <tr><th>Purpose</th><th>Legal basis (GDPR Art. 6)</th></tr>
          <tr><td>Processing your pledge and delivering associated rewards</td><td>Art. 6(1)(b) — performance of a contract</td></tr>
          <tr><td>Sending you campaign updates you have opted into</td><td>Art. 6(1)(a) — your consent</td></tr>
          <tr><td>Complying with tax and accounting obligations</td><td>Art. 6(1)(c) — legal obligation</td></tr>
          <tr><td>Improving and securing the Site (server logs)</td><td>Art. 6(1)(f) — legitimate interest</td></tr>
        </tbody>
      </table>

      <h2>4 · Service Providers We Use</h2>
      <table className="legal-table">
        <tbody>
          <tr><th>Provider</th><th>Purpose</th><th>Location</th></tr>
          <tr><td>Stripe</td><td>Payment processing for pledges</td><td>EU / United States*</td></tr>
          <tr><td>Supabase</td><td>Pledge records database</td><td>EU</td></tr>
          <tr><td>Vercel</td><td>Website hosting</td><td>EU / global edge network*</td></tr>
        </tbody>
      </table>
      <p>*Where data is transferred outside the European Economic Area, we rely on the provider&apos;s Standard Contractual Clauses (SCCs) or an equivalent EU-approved data transfer mechanism.</p>

      <h2>5 · How Long We Keep Your Data</h2>
      <ul>
        <li>Pledge and transaction data is retained as required by Italian tax and commercial law (generally 10 years for accounting records)</li>
        <li>Reward fulfillment data (e.g., shipping address) is retained until fulfillment is complete, then deleted unless retention is required by law</li>
        <li>Server log files are retained for a limited operational period for security purposes</li>
      </ul>

      <h2>6 · Your Rights</h2>
      <p>Under the GDPR, you have the right to access, rectify, erase, restrict, or object to the processing of your data, to data portability, and to withdraw consent at any time. You may also lodge a complaint with:</p>
      <p>Garante per la Protezione dei Dati Personali, Piazza Venezia 11, 00187 Rome, Italy · <a href="https://www.garanteprivacy.it">www.garanteprivacy.it</a></p>
      <p>To exercise any of these rights, contact us at <a href="mailto:crowdfunding@rigabrothers.com">crowdfunding@rigabrothers.com</a>.</p>

      <h2>7 · Cookies</h2>
      <p>rigabrothers.com uses only technically necessary cookies required for the Site and payment flow to function. We do not use tracking or advertising cookies without your separate consent.</p>

      <h2>8 · Children&apos;s Privacy</h2>
      <p>The Site is not directed at individuals under the age of 16. We do not knowingly collect personal data from children.</p>

      <h2>9 · Data Security</h2>
      <p>We apply appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.</p>

      <h2>10 · Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date above indicates when it was last revised.</p>

      <h2>11 · Contact Us</h2>
      <div className="legal-contact">
        <strong>Topanga Film</strong>
        <br />
        Via Roma, 14 · 21013 Gallarate (VA), Italy
        <br />
        Email: <a href="mailto:crowdfunding@rigabrothers.com">crowdfunding@rigabrothers.com</a>
      </div>

      <p className="legal-disclaimer">
        This document is a template and does not constitute legal advice. We recommend review by a
        qualified Italian data protection professional prior to relying on it, particularly to confirm
        the VAT/Tax ID, owner name, and that the Stripe/Supabase data processing agreements cover this
        specific use case.
      </p>
    </div>
  );
}
