export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
        <h2 className="text-6xl font-bold text-white mb-4">404</h2>
        <h3 className="text-2xl font-bold text-white mb-4">Page Not Found</h3>
        <p className="text-white/80 mb-6">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
        >
          Go to Birthday Celebration
        </a>
      </div>
    </div>
  )
}
