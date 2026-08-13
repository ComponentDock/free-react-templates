import { pressItems } from '../data'

/** Press section: "Press Releases" eyebrow + "Press" heading on the left,
 *  three article items (title link, date, excerpt) on the right. */
export function Press() {
  return (
    <section id="press-section" data-testid="press" className="bg-white py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="block-heading lg:w-1/3">
            <span className="eyebrow">Press Releases</span>
            <h2>Press</h2>
          </div>
          <ul className="flex-1 space-y-8">
            {pressItems.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl font-bold">
                  <a
                    href="#press-section"
                    className="text-black transition-colors hover:text-brand"
                  >
                    {item.title}
                  </a>
                </h3>
                <span className="mt-1 block text-sm text-gray-500">{item.date}</span>
                <p className="mt-2 text-body">{item.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
