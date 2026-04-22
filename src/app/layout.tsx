import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolia",
  description: "Toolia — audioguide AI per siti culturali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
