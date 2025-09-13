import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 px-6 lg:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          Reach out to us for inquiries, proposals, or consultations.  
          We’d love to hear from you.
        </p>
      </section>

      {/* Reuse your Contact section */}
      <Contact />
    </main>
  );
}
