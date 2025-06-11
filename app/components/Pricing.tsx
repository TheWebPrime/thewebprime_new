import MotionWrapper from "./MotionWrapper";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 px-4">
      <MotionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">One Simple Price</h2>
        <p className="mt-4 text-lg text-gray-600">
          Pay once. No monthly fees. Get a stunning business website with everything included.
        </p>

        <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          <div className="text-4xl font-extrabold text-blue-600 mb-2">$249</div>
          <p className="text-gray-600 mb-6">One-time payment. No hidden costs.</p>

          <ul className="text-left text-sm text-gray-700 space-y-3 mb-6">
            <li>✅ Mobile-friendly, SEO-optimized design</li>
            <li>✅ Contact form + WhatsApp button</li>
            <li>✅ Free domain connection + SSL</li>
            <li>✅ Google Maps + business info</li>
            <li>✅ Delivered in 72 hours</li>
          </ul>

          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Get Started Now
          </a>
        </div>
      </div>
      </MotionWrapper>
    </section>
  );
}
