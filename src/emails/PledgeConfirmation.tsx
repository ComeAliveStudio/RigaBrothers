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

type PledgeConfirmationProps = {
  backerName?: string | null;
  tierTitle: string;
  amount: number; // in whole EUR
};

const RIGA_RED = "#8b1a2e";
const RIGA_BLACK = "#141414";

export default function PledgeConfirmation({
  backerName,
  tierTitle,
  amount,
}: PledgeConfirmationProps) {
  const greeting = backerName ? `Thank you, ${backerName}.` : "Thank you.";

  return (
    <Html>
      <Head />
      <Preview>Your pledge to Riga Brothers is confirmed - {tierTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={brand}>RIGA BROTHERS</Text>
          <Heading style={heading}>{greeting}</Heading>
          <Text style={paragraph}>
            Your pledge in support of the Riga Brothers documentary has been confirmed. This
            film exists because of backers like you.
          </Text>

          <Section style={card}>
            <Text style={cardLabel}>Your pledge</Text>
            <Text style={cardTier}>{tierTitle}</Text>
            <Text style={cardAmount}>
              €{amount.toLocaleString("de-DE")}
            </Text>
          </Section>

          <Text style={paragraph}>
            We will be in touch with updates as production moves forward, and with details on
            your reward closer to completion. In the meantime, you can follow the project or
            share it with someone who might want to back it too.
          </Text>

          <Link href="https://rigabrothers.com" style={button}>
            Visit the campaign
          </Link>

          <Hr style={hr} />

          <Text style={footer}>
            Riga Brothers Documentary - Come Alive Video &amp; Audio Solutions e.U.
            <br />
            Neustiftgasse 10/20, 1070 Vienna, Austria
            <br />
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

PledgeConfirmation.PreviewProps = {
  backerName: "Angelo",
  tierTitle: "Soundtrack Edition",
  amount: 100,
} satisfies PledgeConfirmationProps;

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
  color: "#6b6b6b",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  margin: "0 0 6px",
};

const cardTier = {
  color: RIGA_BLACK,
  fontSize: "18px",
  fontWeight: 600,
  margin: "0 0 4px",
};

const cardAmount = {
  color: RIGA_RED,
  fontSize: "24px",
  fontWeight: 700,
  margin: 0,
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
