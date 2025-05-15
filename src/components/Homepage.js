
export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <header className="bg-green-500 p-6 text-white text-center text-3xl font-bold shadow">
        Welcome to SecurSA
      </header>

      <section className="text-center py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">What do you need help with?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
          <button className="bg-blue-100 hover:bg-blue-200 p-4 rounded shadow">Armed Response</button>
          <button className="bg-blue-100 hover:bg-blue-200 p-4 rounded shadow">Guarding</button>
          <button className="bg-blue-100 hover:bg-blue-200 p-4 rounded shadow">CCTV</button>
          <button className="bg-blue-100 hover:bg-blue-200 p-4 rounded shadow">Alarm Systems</button>
          <button className="bg-blue-100 hover:bg-blue-200 p-4 rounded shadow">Off-site Monitoring</button>
        </div>
      </section>

      <section className="bg-blue-50 py-10 px-4 text-center">
        <p className="text-lg max-w-2xl mx-auto">
          SecurSA connects you with trusted, vetted security providers across South Africa —
          fast, safe, and compliant. Only PSIRA-registered companies allowed.
        </p>
      </section>

      <footer className="bg-green-500 text-white py-4 text-center">
        &copy; {new Date().getFullYear()} SecurSA. All rights reserved.
      </footer>
    </div>
  );
}
