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
          src="/file.svg"
          alt="Icono de libre.net.pe"
          width={16}
          height={16}
        />
        libre.net.pe
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://horarios.libre.net.pe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/window.svg"
          alt="Icono de Horarios"
          width={16}
          height={16}
        />
        Horarios
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://leads.libre.net.pe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/window.svg"
          alt="Icono de Leads"
          width={16}
          height={16}
        />
        Leads
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://agendamascota.org.pe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/window.svg"
          alt="Icono de Agenda Mascota"
          width={16}
          height={16}
        />
        Agenda Mascota
      </a>
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href={`/privacy`}>
        <Image
          src="/globe.svg"
          alt="Icono de privacidad"
          width={16}
          height={16}
        />
        Privacidad
      </Link>
    </footer>
  )
}