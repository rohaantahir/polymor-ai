import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl md:text-4xl font-bold">
      {/* <Image src="/logo.svg" alt="Polymor logo" width={180} height={40} /> */}
      Polymor
    </Link>
  );
}
