export function TopHeader() {
  return (
    <header className="bg-heading text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <p className="text-sm">
          Welcome to <span className="font-semibold text-gold-500">Ledgerly</span>
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="transition-colors hover:text-gold-500">
            Login | Register
          </a>
          <a href="#" className="transition-colors hover:text-gold-500">
            FAQ
          </a>
          <a href="#" className="font-semibold text-gold-500 transition-colors hover:text-gold-400">
            Earn Money
          </a>
        </div>
      </div>
    </header>
  )
}
