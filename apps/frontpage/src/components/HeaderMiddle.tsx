export function HeaderMiddle() {
  return (
    <div className="bg-white py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-3xl font-black tracking-tight text-heading">
          Front<span className="text-brand">Page</span>
        </a>
        <div className="hidden sm:block">
          <img
            src="https://picsum.photos/seed/frontpage-ad/728/90"
            alt="Advertisement banner"
            className="h-[90px] w-[728px] max-w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
