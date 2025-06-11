import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} The Web Prime. All rights reserved.</p>

        <div className="space-x-4">
          <Link href="/legal/privacy-policy" className="hover:text-blue-600 transition">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="hover:text-blue-600 transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
