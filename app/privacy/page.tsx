import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | libre.net.pe",
  description: "Política de privacidad de Interactive Systems (libre.net.pe). Información sobre cómo recopilamos, utilizamos y protegemos sus datos personales.",
  keywords: ["privacidad", "política de privacidad", "protección de datos", "libre.net.pe", "Interactive Systems"],
  authors: [{ name: "Interactive Systems" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Política de Privacidad | libre.net.pe",
    description: "Política de privacidad de Interactive Systems. Conoce cómo protegemos tus datos.",
    url: "https://libre.net.pe/privacy",
    siteName: "libre.net.pe",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidad | libre.net.pe",
    description: "Política de privacidad de Interactive Systems. Conoce cómo protegemos tus datos.",
  },
  alternates: {
    canonical: "https://libre.net.pe/privacy",
  },
};

export default function Privacy() {
  return (
    <div className={`min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <header className="mb-4">
        <Link href="/" aria-label="Volver a la página principal">
          <Image
            src="/icon_48.svg"
            alt="Logo de libre.net.pe"
            width={32}
            height={32}
          />
        </Link>
      </header>
      <main className="content">
        <article>
          <h1 className="text-2xl font-bold">Privacy policy</h1>
          <p className="mb-2">Interactive Systems (libre.net.pe) takes your privacy seriously. To better protect your privacy we provide this privacy policy notice explaining the way your personal information is collected and used.</p>

          <section>
            <h2 className="text-xl mb-2 mt-4">Collection of Routine Information</h2>

            <p className="mb-2">This app track basic information about their users. This information includes, but is not limited to, IP addresses, app details, timestamps and referring pages. None of this information can personally identify specific user to this app. The information is tracked for routine administration and maintenance purposes.</p>
          </section>

          <section>
            <h2 className="text-xl mb-2 mt-4">Cookies</h2>
            <p className="mb-2">Where necessary, this app uses cookies to store information about a visitor&apos;s preferences and history in order to better serve the user and/or present the user with customized content.</p>
          </section>

          <section>
            <h2 className="text-xl mb-2 mt-4">Advertisement and Other Third Parties</h2>
            <p className="mb-2">Advertising partners and other third parties may use cookies, scripts and/or web beacons to track user activities on this app in order to display advertisements and other useful information. Such tracking is done directly by the third parties through their own servers and is subject to their own privacy policies. This app has no access or control over these cookies, scripts and/or web beacons that may be used by third parties. Learn how to <a href="http://www.google.com/privacy_ads.html">opt out of Google&apos;s cookie usage</a>.</p>
          </section>

          <section>
            <h2 className="text-xl mb-2 mt-4">Links to Third Party Websites</h2>
            <p className="mb-2">We have included links on this app for your use and reference. we are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from our own.</p>
          </section>

          <section>
            <h2 className="text-xl mb-2 mt-4">Security</h2>
            <p className="mb-2">The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl mb-2 mt-4">Changes To This Privacy Policy</h2>
            <p className="mb-2">This Privacy Policy is effective as of 01-08-2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
            <p className="mb-2">We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our app.</p>
          </section>

          <section>
            <h2 className="text-xl mb-2 mt-4">Contact Information</h2>
            <p className="mb-2">For any questions or concerns regarding the privacy policy, please send us an email to <a href="mailto:privacy@libre.net.pe" className="underline text-accent">privacy@libre.net.pe</a>.</p>
          </section>
        </article>
      </main>
      <Footer className="mt-8" />
    </div>
  )
}