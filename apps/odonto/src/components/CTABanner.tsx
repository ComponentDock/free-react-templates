export function CTABanner() {
  return (
    <section className="py-16 bg-teal-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do not wait, make an appointment today!
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <a
          href="#appointment"
          className="inline-block bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Make an Appointment
        </a>
      </div>
    </section>
  )
}
