
export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-[#00205B]">
      <header className="flex justify-between items-center px-6 py-4">
        <img src="/logo.png" alt="SecurSA Logo" className="h-28" />
        <nav className="space-x-6 text-[#00205B] font-medium">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">News</a>
          <a href="#">Ask Surelock</a>
          <a href="#">Login</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center px-6 py-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-[#00205B] leading-tight">
            Security quotes on alarms, reaction, and guarding — quick and easy.
          </h1>
          <p className="text-lg text-[#00205B] mb-6 leading-relaxed">
            Whether it’s your home, your business, or your granny’s spaza shop —
            we’ll connect you to trusted, <span className="text-[#84BD00] font-semibold">PSIRA-registered</span> security companies
            in less time than it takes to pour a <span className="text-[#84BD00] font-semibold">Brannas & Coke</span> — or crack open a <span className="text-[#84BD00] font-semibold">Black Label</span>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Alarm Systems</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Armed Response</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Guarding</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">CCTV</button>
            <button className="bg-[#00205B] text-white p-3 rounded hover:bg-[#001844]">Off-site Monitoring</button>
            <button className="bg-[#84BD00] text-white p-3 rounded hover:bg-green-700">📚 Book Training</button>
          </div>

          <h2 className="text-2xl font-bold text-[#00205B] mb-4">💡 Why Use SecurSA?</h2>
          <ul className="space-y-6">
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">No shady operators allowed.</span><br /><span className="italic text-[#00205B]">We only list PSIRA-registered pros. No cowboys, no chancers.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">No pushy sales calls. Ever.</span><br /><span className="italic text-[#00205B]">You're in control — you pick who contacts you.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">No spam, no nonsense.</span><br /><span className="italic text-[#00205B]">Your details are protected tighter than a vault at SecurBank.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">It’s 100% free for consumers.</span><br /><span className="italic text-[#00205B]">Quotes, connections, comparisons — no fees, no tricks.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">Only verified, vetted providers.</span><br /><span className="italic text-[#00205B]">Like a bouncer at the digital door. No ID? No entry.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">Quotes in under 2 minutes.</span><br /><span className="italic text-[#00205B]">Faster than boiling your kettle — even on load shedding backup.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">Locally matched, nationwide reach.</span><br /><span className="italic text-[#00205B]">From Cape Town to Kuruman — we’ll find you the right fit.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">No obligation. No contracts.</span><br /><span className="italic text-[#00205B]">Browse, compare, walk away. We won’t sulk.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">Built for South Africans, by South Africans.</span><br /><span className="italic text-[#00205B]">We get the risks. We’ve lived them. And we built a solution that works.</span></li>
            <li><span className="inline-block text-[#84BD00] font-bold mr-2">🔒</span><span className="text-[#00205B] font-semibold">Ask Surelock if you're unsure.</span><br /><span className="italic text-[#00205B]">She's sharp, local, and knows her way around an electric fence.</span></li>
          </ul>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 text-center">
          <img src="/surelock-placeholder.png" alt="Surelock Mascot" className="mx-auto w-96" />
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SecurSA. All rights reserved.
      </footer>
    </div>
  );
}
