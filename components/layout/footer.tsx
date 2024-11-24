import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer className={`${props?.className || ''} row-start-3 flex gap-6 flex-wrap items-center justify-center`}>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        libre.net.pe
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://agendamascota.org.pe"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Agenda Mascota
      </a>
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href={`/privacy`}>
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Privacidad
      </Link>
    </footer>
  )
}