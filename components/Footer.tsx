'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-20">
    {/* Divider line */}
      <div className="border-t border-gray-800 mb-4"></div>

      <p className="text-center text-sm">
        © {new Date().getFullYear()}{" "}
        Shania Mae Ucag
        <span className="mx-2">|</span> 
        All rights reserved.
      </p>
    </footer>
  );
}