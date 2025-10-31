export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ willChange: 'transform' }}>
      {/* Large glowing blobs with vibrant colors */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(90, 107, 122, 0.25) 0%, rgba(90, 107, 122, 0.1) 50%, transparent 100%)",
          animation: "blob-float 20s ease-in-out infinite, blob-pulse 8s ease-in-out infinite",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(154, 170, 184, 0.2) 0%, rgba(154, 170, 184, 0.08) 50%, transparent 100%)",
          animation: "blob-float 25s ease-in-out infinite, blob-pulse 12s ease-in-out infinite",
          animationDelay: "2s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(90, 107, 122, 0.3) 0%, rgba(90, 107, 122, 0.12) 50%, transparent 100%)",
          animation: "blob-float 22s ease-in-out infinite, blob-pulse 10s ease-in-out infinite",
          animationDelay: "4s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      
      {/* Medium blobs with soft glow */}
      <div 
        className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full blur-2xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(200, 208, 213, 0.15) 0%, rgba(200, 208, 213, 0.05) 50%, transparent 100%)",
          animation: "blob-float 18s ease-in-out infinite, blob-pulse 14s ease-in-out infinite",
          animationDelay: "1s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full blur-2xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(90, 107, 122, 0.2) 0%, rgba(90, 107, 122, 0.06) 50%, transparent 100%)",
          animation: "blob-float 16s ease-in-out infinite, blob-pulse 9s ease-in-out infinite",
          animationDelay: "3s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      
      {/* Small accent blobs */}
      <div 
        className="absolute top-1/4 right-0 w-[280px] h-[280px] rounded-full blur-xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(232, 237, 240, 0.2) 0%, rgba(232, 237, 240, 0.08) 50%, transparent 100%)",
          animation: "blob-float 24s ease-in-out infinite, blob-pulse 11s ease-in-out infinite",
          animationDelay: "2.5s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      <div 
        className="absolute bottom-1/3 right-1/2 w-[240px] h-[240px] rounded-full blur-xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(154, 170, 184, 0.25) 0%, rgba(154, 170, 184, 0.1) 50%, transparent 100%)",
          animation: "blob-float 19s ease-in-out infinite, blob-pulse 13s ease-in-out infinite",
          animationDelay: "5s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      
      {/* Additional small blobs for depth */}
      <div 
        className="absolute top-3/4 left-1/2 w-[200px] h-[200px] rounded-full blur-2xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(90, 107, 122, 0.15) 0%, rgba(90, 107, 122, 0.05) 50%, transparent 100%)",
          animation: "blob-float 21s ease-in-out infinite, blob-pulse 10s ease-in-out infinite",
          animationDelay: "3.5s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
      <div 
        className="absolute top-1/6 left-2/3 w-[180px] h-[180px] rounded-full blur-xl ncrypt-blob"
        style={{ 
          background: "radial-gradient(circle, rgba(200, 208, 213, 0.12) 0%, rgba(200, 208, 213, 0.04) 50%, transparent 100%)",
          animation: "blob-float 23s ease-in-out infinite, blob-pulse 12s ease-in-out infinite",
          animationDelay: "4.5s",
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
      />
    </div>
  )
}

