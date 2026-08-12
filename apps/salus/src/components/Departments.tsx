import { departments } from '../data'

export function Departments() {
  return (
    <section id="departments" aria-label="Departments" className="bg-white pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h3 className="relative inline-block pb-4 text-4xl font-medium text-ink">
            Our Departments
            <span
              className="absolute bottom-0 left-1/2 h-0.5 w-[50px] -translate-x-1/2 bg-sky"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-5 text-base text-body">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
            placing drawing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <article
              key={department.title}
              className="overflow-hidden rounded bg-white shadow-[0_6px_10px_rgba(0,0,0,0.04)]"
            >
              <div className="overflow-hidden">
                <img
                  src={department.image}
                  alt=""
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="px-8 py-6">
                <h4 className="text-xl font-medium text-ink">{department.title}</h4>
                <p className="mt-3 text-base leading-6 text-body">
                  Esteem spirit temper too say adieus who direct esteem. It esteems luckily or
                  picture placing drawing.
                </p>
                <a
                  href="#departments"
                  className="mt-4 inline-block text-base text-sky hover:underline"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
