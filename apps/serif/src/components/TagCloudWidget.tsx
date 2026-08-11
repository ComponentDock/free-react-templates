import { tags, tagsTitle } from '../data'

export function TagCloudWidget() {
  return (
    <div className="bg-widget px-[30px] py-12">
      <h2 className="relative pb-3 text-xl font-bold text-ink after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[20%] after:bg-brand">
        {tagsTitle}
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <a
              href="#"
              className="inline-block border border-transparent bg-white px-[21px] py-[3px] text-sm text-meta transition-colors hover:bg-coal hover:text-brand"
            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
