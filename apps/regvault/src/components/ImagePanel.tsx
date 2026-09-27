export function ImagePanel() {
  return (
    <div className="relative hidden w-full md:block md:w-1/2">
      <img
        src="https://picsum.photos/seed/regvault-event/600/500"
        alt="Event performer"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-navy/60 px-6 py-4 text-center text-xs text-white/90">
        <p>31st East Street, New York, NY</p>
        <p>T: 987 2345 743</p>
        <p>E: INFO@YOURWEB.COM</p>
      </div>
    </div>
  )
}
