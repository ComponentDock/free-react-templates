export function Header() {
  return (
    <header className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="font-body text-3xl font-black tracking-tight text-text-dark">Newscope</h1>
        <p className="mt-1 font-ui text-sm text-text-muted">
          Your daily source for news, entertainment, and lifestyle
        </p>
      </div>
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/newscope-banner/1200/300)' }}
      />
    </header>
  )
}
