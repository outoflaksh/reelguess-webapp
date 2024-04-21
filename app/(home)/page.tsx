export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-indigo-900 h-screen">
      <div className="px-6 lg:px-8">
        <div className="py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-300/10 hover:ring-gray-300/20">
              Made with {'<3'} for the Supabase Hackathon <a href="#" className="font-semibold text-primary-400"><span className="inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">The Ultimate Movie Guessing Game</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Invite your friends or join public rooms to compete in exhilarating movie guessing battles.</p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a href="/login" className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Play ReelGuess</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-300">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
