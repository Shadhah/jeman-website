import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <main>
      <section className="py-20 px-6 lg:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 mb-12">
          We provide professional engineering and management services 
          across multiple disciplines.
        </p>
      </section>
      
      {/* Reuse your Services grid */}
      <Services />
    </main>
  );
}
