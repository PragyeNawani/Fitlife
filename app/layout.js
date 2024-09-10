import "./globals.css";
export const metadata = {
  title: "FitLife | Future Of Better Life",
  description: "Fitness Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
