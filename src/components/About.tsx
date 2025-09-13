import { Target, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          About Jeman Holdings
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Jeman Holdings Ltd is a market leader in{" "}
          <span className="font-semibold text-brand-gold">
            engineering, environmental management, and project planning
          </span>.  
          Our experienced team is committed to providing high-quality solutions 
          that are on time, within budget, and exceed client expectations.  
          We are especially proud of our contributions in sustainability, renewable
          energy, and community impact across East Africa.
        </p>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl shadow-sm bg-gray-50 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 mb-4 mx-auto">
              <Target className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              To increase efficiency, productivity, and responsiveness in 
              project engineering and management through high-quality 
              automation solutions and applications.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-sm bg-gray-50 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 mb-4 mx-auto">
              <Eye className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
            <p className="text-gray-600">
              To be Africa’s leading partner in digital transformation, 
              sustainability, and world-class infrastructure development.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-sm bg-gray-50 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 mb-4 mx-auto">
              <HeartHandshake className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, teamwork, and a commitment to making a 
              lasting positive impact in every community we serve.
            </p>
          </div>
        </div>

        {/* Meet Our Team */}
        <h3 className="text-2xl font-bold text-brand-blue mb-8">Meet Our Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <img
              src="/team/md.jpg"
              alt="Managing Director"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold text-gray-900">Jimale Mahat Ali</h4>
            <p className="text-sm text-gray-600">Managing Director</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <img
              src="/team/ceo.jpg"
              alt="Chief Operations Officer"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold text-gray-900">Eng. Osman A. Salat</h4>
            <p className="text-sm text-gray-600">Chief Operations Officer</p>
          </div>

          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
}
