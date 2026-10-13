import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const RIGA_RED = "#8b1a2e";
const RIGA_BLACK = "#141414";

export default function NewsletterWelcome() {
  return (
    <Html>
      <Head>
        {/* Locks the colour scheme so dark-mode email clients (Gmail, Apple
            Mail, Outlook) don't auto-invert/lighten our red into pink. */}
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{`
          :root {
            color-scheme: light;
            supported-color-schemes: light;
          }
        `}</style>
      </Head>
      <Preview>You're on the list - thank you for following Riga Brothers</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={brand}>RIGA BROTHERS</Text>
          <Heading style={heading}>You&apos;re on the list.</Heading>
          <Text style={paragraph}>
            Thank you for following the Riga Brothers documentary. We will keep you updated on
            production progress, the campaign, and when the film is ready to share - no spam,
            just the moments that matter.
          </Text>

          <Section style={card}>
            <Text style={cardLabel}>A Documentary 30 Years in the Making</Text>
            <Text style={cardTier}>
              A 30-Year Journey Through Friendship, Freedom and Baltic History
            </Text>
          </Section>

          <Text style={paragraph}>
            If you&apos;d like to support the film directly, you can back the campaign any time -
            every pledge helps bring this story to the screen.
          </Text>

          <Link href="https://rigabrothers.com" style={button}>
            Visit the campaign
          </Link>

          <Hr style={hr} />

          <Text style={signoffBrand}>RIGA BROTHERS</Text>
          <Text style={signoffTeam}>Support Team</Text>
          <Text style={signoffTagline}>A Documentary 30 Years in the Making</Text>
          <Text style={signoffLink}>
            <Link href="https://rigabrothers.com" style={footerLink}>
              rigabrothers.com
            </Link>
          </Text>

          <Text style={footer}>
            Questions? Reply to this email or write to{" "}
            <Link href="mailto:crowdfunding@rigabrothers.com" style={footerLink}>
              crowdfunding@rigabrothers.com
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fcfcfc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "48px 24px 64px",
  maxWidth: "480px",
};

const brand = {
  color: RIGA_RED,
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.3em",
  textTransform: "uppercase" as const,
  marginBottom: "24px",
};

const heading = {
  color: RIGA_BLACK,
  fontSize: "28px",
  fontWeight: 700,
  margin: "0 0 16px",
  letterSpacing: "-0.01em",
};

const paragraph = {
  color: "#333",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 20px",
};

const card = {
  backgroundColor: "#ffffff",
  border: `1px solid #e0e0e0`,
  borderLeft: `3px solid ${RIGA_RED}`,
  borderRadius: "4px",
  padding: "20px 24px",
  margin: "0 0 24px",
};

const cardLabel = {
  color: RIGA_RED,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  margin: "0 0 6px",
};

const cardTier = {
  color: RIGA_BLACK,
  fontSize: "16px",
  fontWeight: 600,
  margin: 0,
  lineHeight: "1.4",
};

const button = {
  display: "inline-block",
  backgroundColor: RIGA_RED,
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "2px",
  margin: "0 0 32px",
};

const hr = {
  borderColor: "#e0e0e0",
  margin: "32px 0 24px",
};

const footer = {
  color: "#6b6b6b",
  fontSize: "12px",
  lineHeight: "1.7",
};

const footerLink = {
  color: RIGA_RED,
};

const signoffBrand = {
  color: RIGA_RED,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.25em",
  textTransform: "uppercase" as const,
  margin: "0 0 2px",
};

const signoffTeam = {
  color: RIGA_BLACK,
  fontSize: "14px",
  fontWeight: 600,
  margin: "0 0 10px",
};

const signoffTagline = {
  color: "#6b6b6b",
  fontSize: "12px",
  margin: "0 0 4px",
};

const signoffLink = {
  fontSize: "12px",
  margin: "0 0 20px",
};
