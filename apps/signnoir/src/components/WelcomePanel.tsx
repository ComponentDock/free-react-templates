export function WelcomePanel() {
  return (
    <div
      className="relative flex w-full flex-col justify-end bg-cover bg-center p-6 text-white/80 lg:w-1/2 lg:p-12"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/signnoir-1/1200/900)',
      }}
    >
      {/* Dark tint over the photo */}
      <div aria-hidden="true" className="absolute inset-0 bg-overlay/50" />
      <div className="relative">
        <h2 className="mb-6 text-2xl font-bold text-white">Welcome to signup form</h2>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
      </div>
    </div>
  )
}
