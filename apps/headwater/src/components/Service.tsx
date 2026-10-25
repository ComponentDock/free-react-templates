import { SERVICE } from '../content'
import { Container, Eyebrow } from './ui'

/**
 * White band, one hairline table: a 1 px sage-grey ground shows through the
 * grid gaps inside a rounded, overflow-hidden shell, so the four cells read as
 * one bordered table without a single border on the cells themselves.
 */
export function Service() {
  return (
    <section id="service" className="section bg-white dark:bg-gray-950">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow weight="bold">{SERVICE.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-10 tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {SERVICE.heading}
          </h2>
          <p className="mt-4 text-lg leading-[1.625] text-ink-500 dark:text-gray-300">
            {SERVICE.lede}
          </p>
        </div>

        <div
          data-service-grid
          className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-800"
        >
          {SERVICE.cells.map((cell) => (
            <div
              key={cell.title}
              data-service-cell
              className="flex flex-col bg-white p-8 dark:bg-gray-900"
            >
              <h3 className="text-lg font-bold leading-7 text-ink-800 dark:text-white">
                {cell.title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-6 text-ink-500 dark:text-gray-300">
                {cell.body}
              </p>
              <p className="mt-4 text-sm font-bold leading-5 text-primary-700 dark:text-primary-300">
                {cell.price}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
