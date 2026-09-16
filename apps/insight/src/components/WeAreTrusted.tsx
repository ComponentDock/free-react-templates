export function WeAreTrusted() {
  return (
    <section className="bg-lavender py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/insight-trusted/800/600"
              alt="Trusted consulting"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-lg bg-white/80 p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-navy-dark">What we do for you</h2>
              <p className="mb-4 leading-relaxed text-muted">
                We provide comprehensive consulting services tailored to your business needs. Our
                team of experts brings years of experience across industries to help you navigate
                challenges and seize opportunities.
              </p>
              <p className="leading-relaxed text-muted">
                From strategic planning to operational excellence, we work alongside you to deliver
                measurable results that drive growth and long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
