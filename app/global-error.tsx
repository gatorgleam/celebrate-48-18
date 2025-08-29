'use client'

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
            <p className="text-white/80 mb-6">A global error occurred. Please try again.</p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
