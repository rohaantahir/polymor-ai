import Logo from "@/components/Shared/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-16 container mx-auto px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-white/60 text-sm pl-2 pt-2">
              Building the world's first intelligent edge AI nervous system—a
              decentralized network of high-performance nodes.
            </p>
          </div>

          <div></div>
          <div></div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-white/60">
                <strong className="text-white">Singapore:</strong>
                <br />5 Shenton Way, UIC Building #10-01
              </li>
              <li className="text-white/60">
                <strong className="text-white">Hong Kong:</strong>
                <br />
                Unit E, 31/F, Tower B, Billion Centre, Kowloon Bay
              </li>
              <li>
                <a
                  href="mailto:contact@polymor.ai"
                  className="text-themeBlue hover:underline"
                >
                  contact@polymor.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Polymor. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
