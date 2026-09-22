export function AboutSplit() {
  return (
    <section className="bg-mist py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-5/12">
            <img
              src="https://picsum.photos/seed/vitaflow-coach/600/700"
              alt="Health coach"
              className="w-full rounded object-cover"
            />
          </div>
          <div className="w-full md:w-7/12 md:pl-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-400">
              Welcome to Vitaflow
            </p>
            <h2 className="mb-4 text-2xl font-bold text-ink">
              Hello! Health coaching is a natural way of improving your health
            </h2>
            <p className="mb-4 text-sm text-smoke">
              Our expert health coaches combine evidence-based practices with personalized attention
              to help you transform your lifestyle. We believe in sustainable changes that lead to
              lasting results.
            </p>
            <p className="mb-6 text-sm text-smoke">
              Whether you are looking to lose weight, build muscle, or simply feel more energetic,
              our team of certified professionals will guide you every step of the way.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/vitaflow-founder/100/100"
                alt="Cythia Hunter"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h4 className="m-0 text-base font-semibold text-ink">Cythia Hunter</h4>
                <span className="text-sm text-smoke">Personal Dietitian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
