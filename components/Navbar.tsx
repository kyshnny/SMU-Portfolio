'use client';

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isBlogPage = pathname.startsWith("/blog");

  const handleBackToBlogSection = () => {
    // Navigate to homepage
    router.push("/#blog"); // Add the ID of your BlogSection
  };

  if (isBlogPage) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">SMU</h1>

          <button
            onClick={handleBackToBlogSection}
            className="flex items-center text-white hover:text-[#360185] transition-colors duration-300 gap-2"
          >
            <ChevronLeft className="w-5 h-15" />
            Back to Blog
          </button>
        </div>
      </nav>
    );
  }

  // HOMEPAGE NAVBAR
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000] py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">SMU</h1>

        <div className="space-x-6 hidden md:flex">
          {["HOME", "ABOUT", "PORTFOLIO", "BLOG", "RESUME", "CONTACTS"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer text-white hover:text-[#360185] transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}