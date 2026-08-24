import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/layout/AnimatedBackground";

export const metadata = {
  title: "Cyber Security — Tim & Divisi",
  description:
    "Penjelasan lengkap tentang cyber security: fungsi, peran, dan keahlian di 7 tim warna (Red, Blue, Green, Purple, Orange, Yellow, White).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen antialiased">
        <AnimatedBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
