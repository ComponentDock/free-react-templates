export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-3xl font-bold text-black">About Us</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-4">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic life. One day however a small line of blind text by the name of Lorem
              Ipsum decided to leave for the far World of Grammar.
            </p>
            <p>
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/servhub-about/500/400"
              alt="About Servhub"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mb-4">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic life. One day however a small line of blind text by the name of Lorem
              Ipsum decided to leave for the far World of Grammar.
            </p>
            <p>
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
