export function Testimony() {
  return (
    <section className="relative bg-dark-brown py-24" style={{ backgroundAttachment: 'fixed' }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/meetuply-testimony/1920/800)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="mb-2 text-sm font-light uppercase tracking-widest text-gray-300">
          Testimony
        </h2>
        <h3 className="mb-8 text-3xl font-bold">What People Say</h3>

        <blockquote className="mx-auto max-w-3xl">
          <p className="mb-6 text-lg italic leading-relaxed text-gray-200">
            &ldquo;Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
            the coast of the Semantics, a large language ocean.&rdquo;
          </p>
          <footer className="text-sm font-medium text-brand-light">
            John Deo, CEO at TechCorp
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
