import Logo from "@/components/Shared/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-16 container mx-auto px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-white/60 text-sm pt-2">
              Accelerate intelligence distribution
            </p>
          </div>

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
              <li className="text-white/60">
                <strong className="text-white">Shenzhen:</strong>
                <br />
                Unit 1705, 17/F, Seaview Plaza, Shekou, Nanshan
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 md:mt-12">
              <li className="text-white/60">
                <strong className="text-white">Shanghai:</strong>
                <br />
                Building TA, Wanxiang Enterprise Center, 208 Haojing Road,
                Minhang
              </li>
              <li className="text-white/60">
                <strong className="text-white">Las Vegas:</strong>
                <br />
                1050 E Flamingo Road, Las Vegas, Nevada, USA
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Email</h3>
            <ul className="space-y-3">
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
