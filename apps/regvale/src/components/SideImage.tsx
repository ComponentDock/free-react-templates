export function SideImage() {
  return (
    <div className="hidden w-[40%] bg-brand max-md:block max-md:h-40 max-md:w-full md:flex md:items-center md:justify-center">
      <img
        src="https://picsum.photos/seed/regvale/600/800"
        alt="Registration illustration"
        className="h-full w-full object-cover max-md:h-40"
      />
    </div>
  )
}
