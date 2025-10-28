import Image from "next/image";

import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <article className="text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-4">¿Buscas software?</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Desarrollamos soluciones empresariales para tu negocio
          </p>
        </article>

        <section className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://horarios.libre.net.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-solid border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">📅 Gestión de Horarios</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sistema completo para administrar horarios y citas de tu negocio
              </p>
              <span className="text-sm text-blue-600 dark:text-blue-400 mt-2 inline-block">
                Ir a Horarios →
              </span>
            </a>

            <a
              href="https://leads.libre.net.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-solid border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">📊 Gestión de Leads</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Captura, gestiona y convierte tus leads en clientes efectivamente
              </p>
              <span className="text-sm text-blue-600 dark:text-blue-400 mt-2 inline-block">
                Ir a Leads →
              </span>
            </a>
          </div>
        </section>

        <nav className="flex gap-4 items-center flex-col sm:flex-row mt-4" aria-label="Acciones principales">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://leads.libre.net.pe/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Icono de contacto"
              width={20}
              height={20}
            />
            Contáctanos
          </a>
        </nav>
      </main>
      <Footer />
    </div>
  );
}