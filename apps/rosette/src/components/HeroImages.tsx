export function HeroImages() {
  return (
    <div className="relative hidden min-h-[400px] w-[40%] md:block">
      {/* Decorative pink square border (top-left) */}
      <div className="absolute left-[30px] top-[40px] h-[200px] w-[200px] border-2 border-brand/40" />
      {/* Main portrait image */}
      <img
        src="https://picsum.photos/seed/rosette-portrait/350/450"
        alt="Portrait"
        className="absolute left-[50px] top-[60px] h-[320px] w-[240px] object-cover shadow-lg"
      />
      {/* Decorative pink square border (bottom-right) */}
      <div className="absolute bottom-[30px] left-[180px] h-[150px] w-[150px] border-2 border-brand/40" />
      {/* Product image */}
      <img
        src="https://picsum.photos/seed/rosette-product/300/300"
        alt="Products"
        className="absolute bottom-[50px] left-[160px] h-[200px] w-[200px] object-cover shadow-lg"
      />
    </div>
  )
}
