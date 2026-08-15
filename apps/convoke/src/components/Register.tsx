export function Register() {
  return (
    <section
      id="register"
      aria-label="Register"
      className="relative px-4 py-24 text-center text-white"
      style={{
        background: 'linear-gradient(to right, #ff9600 0%, #fe531e 26%, #c022a5 57%, #1bb8f9 100%)',
      }}
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80">
          Register Now to Book
        </p>
        <h2 className="text-3xl font-medium md:text-[46px]">Your Presence</h2>
        <a
          href="#register"
          className="mt-10 inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-4 text-base font-medium capitalize text-white transition-colors hover:bg-white hover:text-black"
        >
          Book Now ($150)
        </a>
      </div>
    </section>
  )
}
