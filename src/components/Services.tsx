import {
  Zap,
  Building2,
  Cog,
  Leaf,
  ClipboardList,
} from "lucide-react"; // 👈 icons

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Jeman Holdings Ltd offers professional engineering, environmental 
            management, and project planning services that deliver 
            sustainable solutions across East Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Electrical */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mb-4">
              <Zap className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Electrical Engineering
            </h3>
            <p className="mt-2 text-gray-600">
              Design, installation, and maintenance of modern electrical 
              systems for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Civil */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mb-4">
              <Building2 className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Civil Engineering
            </h3>
            <p className="mt-2 text-gray-600">
              Construction, infrastructure development, and structural 
              engineering services with a focus on quality and durability.
            </p>
          </div>

          {/* Mechanical */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mb-4">
              <Cog className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Mechanical Engineering
            </h3>
            <p className="mt-2 text-gray-600">
              Expert mechanical design, installation, and maintenance 
              for manufacturing, HVAC, and industrial solutions.
            </p>
          </div>

          {/* Environmental Management */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
              <Leaf className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Environmental Management
            </h3>
            <p className="mt-2 text-gray-600">
              Sustainable environmental planning, audits, and management 
              practices that protect ecosystems and communities.
            </p>
          </div>

          {/* Project Planning */}
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4">
              <ClipboardList className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Project Planning & Management
            </h3>
            <p className="mt-2 text-gray-600">
              Professional planning, monitoring, and management services 
              ensuring projects are delivered on time and within budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
