import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Desarrollo de software @libre.net.pe",
  description: "Desarrolla tu app con nosotros. Software para pequeña y mediana empresa. CRM, SAP, ERP. Gestión de clientes, horarios, leads e inventarios. Soluciones empresariales en Perú.",
  keywords: [
    "desarrollo de software",
    "software empresarial",
    "CRM",
    "ERP",
    "SAP",
    "gestión de clientes",
    "gestión de veterinarias",
    "gestión de tiendas",
    "gestión de inventarios",
    "gestión de horarios",
    "gestión de leads",
    "sistema de citas",
    "agendamiento de citas",
    "captura de leads",
    "software Peru",
    "libre.net.pe",
    "Interactive Systems",
  ],
  authors: [{ name: "Interactive Systems", url: "https://libre.net.pe" }],
  creator: "Interactive Systems",
  publisher: "Interactive Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Desarrollo de software @libre.net.pe",
    description: "Software para PyMEs en Perú. Gestión de horarios, leads, clientes e inventarios. CRM, SAP, ERP.",
    url: "https://libre.net.pe",
    siteName: "libre.net.pe",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://libre.net.pe/og-image.png",
        width: 1200,
        height: 630,
        alt: "libre.net.pe - Desarrollo de software para PyMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de software @libre.net.pe",
    description: "Software para PyMEs en Perú. Gestión de horarios, leads, clientes e inventarios. CRM, SAP, ERP.",
    images: ["https://libre.net.pe/og-image.png"],
  },
  alternates: {
    canonical: "https://libre.net.pe",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Interactive Systems",
    alternateName: "libre.net.pe",
    url: "https://libre.net.pe",
    logo: "https://libre.net.pe/icon_48.svg",
    description:
      "Desarrollo de software para pequeña y mediana empresa. CRM, SAP, ERP. Gestión de clientes, Gestión de veterinarias, Gestión de tiendas, Gestión de inventarios.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "privacy@libre.net.pe",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
    sameAs: [
      "https://agendamascota.org.pe",
      "https://horarios.libre.net.pe",
      "https://leads.libre.net.pe",
    ],
    knowsAbout: [
      "Software Development",
      "CRM Systems",
      "ERP Systems",
      "Business Management Software",
      "Inventory Management",
      "Customer Relationship Management",
      "Lead Management",
      "Schedule Management",
      "Appointment Scheduling",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Sistema de Gestión de Horarios",
            url: "https://horarios.libre.net.pe",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: "Sistema completo para administrar horarios y citas de tu negocio",
          },
          price: "0",
          priceCurrency: "PEN",
          availability: "https://schema.org/InStock",
          url: "https://horarios.libre.net.pe",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Sistema de Gestión de Leads",
            url: "https://leads.libre.net.pe",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: "Captura, gestiona y convierte tus leads en clientes efectivamente",
          },
          price: "0",
          priceCurrency: "PEN",
          availability: "https://schema.org/InStock",
          url: "https://leads.libre.net.pe",
        },
      ],
    },
  };

  return (
    <html lang="es-PE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
