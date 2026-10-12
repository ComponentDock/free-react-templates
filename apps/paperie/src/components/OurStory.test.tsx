import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { STORY_HEADING, STORY_PHOTO, STORY_PARAGRAPHS } from '../lib/site'
import { OurStory } from './OurStory'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the story band', () => {
  it('sets a portrait beside the heading and its two paragraphs', () => {
    const { container } = render(<OurStory />)

    expect(screen.getByRole('heading', { level: 2, name: STORY_HEADING })).toBeInTheDocument()

    for (const paragraph of STORY_PARAGRAPHS) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }

    const image = container.querySelector('img') as HTMLImageElement

    expect(image.src).toContain(`seed/${STORY_PHOTO}/1060/1250`)

    const copy = screen.getByText(STORY_PARAGRAPHS[0] as string)

    expect(tokens(copy)).toContain('text-story')
    expect(tokens(copy)).toContain('leading-[30px]')
  })

  it('overlaps the photograph with a sprig and keeps every ornament out of the reading order', () => {
    const { container } = render(<OurStory />)

    const sprig = screen.getByTestId('story-photo-sprig')

    expect(tokens(sprig)).toContain('-bottom-[79px]')
    expect(tokens(sprig)).toContain('-left-[71px]')
    expect(sprig.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')

    const ornaments = container.querySelectorAll('svg[aria-hidden="true"]')

    expect(ornaments).toHaveLength(4)
  })

  it('keeps the pale leaf branches to the widest screens only', () => {
    const { container } = render(<OurStory />)

    const band = screen.getByRole('region', { name: STORY_HEADING })
    const branches = Array.from(band.querySelectorAll(':scope > svg'))

    expect(branches).toHaveLength(2)
    for (const branch of branches) {
      expect(tokens(branch)).toContain('xl:block')
      expect(tokens(branch)).toContain('hidden')
      expect(branch).toHaveAttribute('aria-hidden', 'true')
    }

    expect(container.querySelectorAll('section')).toHaveLength(1)
  })
})
