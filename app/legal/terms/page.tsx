export default function Terms() {
  return (
    <main className="mx-auto px-4 py-20 text-gray-800 bg-white">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        By using The Web Prime, you agree to the following terms and conditions. These terms govern your use of our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Service</h2>
      <p className="mb-4">
        Our website design services are delivered as described. A one-time payment includes the setup, design, and deployment of your site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Payment & Delivery</h2>
      <p className="mb-4">
        Full payment is required before delivery. Your site will be deployed within 72 hours of receiving necessary information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
      <p className="mb-4">
        We are not liable for any damages arising from use of the website after delivery. Clients are responsible for content updates and domain renewals unless otherwise agreed.
      </p>

      <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </main>
  );
}
