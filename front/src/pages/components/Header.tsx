import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center px-6 py-4 font-serif">
      <Link href="/">
        <Image
          src="/img/Logo-Moto.png"
          priority
          width={150}
          height={150}
          alt="logo"
          className="d-flex mt-3"
        />
      </Link>
    </div>
  );
}
