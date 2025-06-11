export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At The Web Prime, your privacy is very important to us. This policy explains what information we collect, how we use it, and your rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Your name, email, and message when using our contact form</li>
        <li>Visitor data via privacy-focused analytics tools</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to respond to inquiries, improve our services, and analyze website performance.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Tools</h2>
      <p className="mb-4">
        We may use tools like Formspree, WhatsApp, and analytics platforms. These services have their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You may request access, modification, or deletion of your data at any time by contacting us.
      </p>

      <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </main>
  );
}
