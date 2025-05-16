
export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-[#00205B]">
      <header className="p-6 text-center">
        <img src="/logo.png" alt="SecurSA Logo" className="mx-auto h-16" />
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center px-6 py-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-[#00205B]">
            Security quotes on alarms, reaction, and guarding — quick and easy.
          </h1>
          <p className="text-lg mb-4">
            Whether it’s your home, your business, or your spaza shop — we’ll connect you to
            <span className="text-[#84BD00] font-semibold"> PSIRA-registered security companies </span>
            in less time than it takes to pour a <span className="italic">Brannas & Coke</span>. 🥃
          </p>
          <ul className="mb-6 space-y-2">
            <li>✅ No pushy sales calls</li>
            <li>✅ No shady operators</li>
            <li>✅ Just verified protection — fast, simple, and secure</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Alarm Systems</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Armed Response</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Guarding</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">CCTV</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Off-site Monitoring</button>
            <button className="bg-[#84BD00] text-white p-3 rounded hover:bg-green-700">📚 Book Training</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 text-center">
          <img src="/surelock-placeholder.png" alt="Surelock Mascot" className="mx-auto w-60" />
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SecurSA. All rights reserved.
      </footer>
    </div>
  );
}
