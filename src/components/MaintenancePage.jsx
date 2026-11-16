export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white px-6 text-center">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
          Portfolio Update
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Under Construction<span className="text-gray-500">.</span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          I'm currently working on improving my portfolio.
          Something new and exciting is coming soon.
        </p>

        <div className="w-48 h-1 bg-gray-800 mx-auto overflow-hidden rounded-full">
          <div className="w-1/2 h-full bg-white rounded-full" />
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Thank you for your patience.
        </p>
      </div>
    </main>
  );
}

