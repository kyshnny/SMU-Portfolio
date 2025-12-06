import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shania Mae Ucag | Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-20">{children}
          <Footer />
        </main>
      </body>
    </html>
  );
}