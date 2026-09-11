export function About() {
  return (
    <section className="flex flex-col bg-white lg:flex-row">
      <div
        className="h-72 bg-cover bg-center lg:h-auto lg:w-1/2"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/advisory-about/800/700)',
        }}
        aria-hidden="true"
      />
      <div className="flex items-center bg-white px-8 py-16 lg:w-1/2 lg:px-16">
        <div className="max-w-lg">
          <h2 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Our
            <br />
            Philosophy
          </h2>
          <p className="mb-4 text-text">
            The automated process starts as soon as your clothes go into the machine. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <p className="mb-8 text-text">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
            tristique posuere.
          </p>
          <div>
            <p className="text-sm text-mist">CEO, Advisory</p>
            <p className="text-lg font-bold text-navy">Capcilena Hanry</p>
          </div>
        </div>
      </div>
    </section>
  )
}
