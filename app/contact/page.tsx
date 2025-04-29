import Navbar from "@/components/Shared/Navbar"
import Footer from "@/components/Shared/Footer"
import ContactPage from "@/components/Contact"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}
