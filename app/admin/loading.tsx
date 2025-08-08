import { Libre_Baskerville } from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function AdminLoading() {
  return (
    <div className={`min-h-screen galaxy-bg flex items-center justify-center px-6 ${libreBaskerville.className}`}>
      <div className="w-full max-w-md">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20 shadow-2xl">
          {/* Header Skeleton */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-galaxy-gold/10 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-8 w-32 bg-galaxy-gold/20 rounded mx-auto mb-2 animate-pulse"></div>
            <div className="h-4 w-48 bg-white/10 rounded mx-auto animate-pulse"></div>
          </div>

          {/* Form Skeleton */}
          <div className="space-y-6">
            <div>
              <div className="h-4 w-24 bg-white/10 rounded mb-2 animate-pulse"></div>
              <div className="h-10 w-full bg-galaxy-dark/40 rounded animate-pulse"></div>
            </div>

            <div>
              <div className="h-4 w-20 bg-white/10 rounded mb-2 animate-pulse"></div>
              <div className="h-10 w-full bg-galaxy-dark/40 rounded animate-pulse"></div>
            </div>

            <div className="h-12 w-full bg-galaxy-gold/20 rounded animate-pulse"></div>
          </div>

          {/* Footer Skeleton */}
          <div className="mt-8 text-center">
            <div className="h-4 w-40 bg-white/10 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-galaxy-gold/20 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border-2 border-galaxy-gold/20 border-t-galaxy-gold rounded-full animate-spin"></div>
            <span className="text-galaxy-gold text-sm">Loading admin...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
