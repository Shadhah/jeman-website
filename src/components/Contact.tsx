import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We’re here to help with your projects. Contact us for inquiries, 
            proposals, or consultations.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <MapPin className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Almas Towers, Kirichwa Road</h3>
            <p className="text-gray-600 text-center">
               Nairobi, Kenya
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <Phone className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600">+254 724 328 877 / +254 702 444 500 </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <Mail className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">info@jemanholdings.com</p>
          </div>
        </div>

        {/* Simple Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Send us a Message
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 md:col-span-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
