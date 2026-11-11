import { CHAPTERS, CHAPTERS_ID } from '../data/site'

/**
 * The film's three chapters on one hairline. The list spans `main`'s full
 * content width, not the hero's 720 px column, so the rule runs the whole page.
 */
export function ChapterStrip() {
  return (
    <ul className="ap-chapters" id={CHAPTERS_ID} aria-label="Film chapters">
      {CHAPTERS.map((chapter) => (
        <li key={chapter.number}>
          <span>{chapter.number}</span>
          {chapter.label}
        </li>
      ))}
    </ul>
  )
}
