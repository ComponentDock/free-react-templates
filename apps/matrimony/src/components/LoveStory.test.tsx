import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LoveStory } from './LoveStory'
import { STORY_PANEL_PARAGRAPHS, STORY_TITLE } from '../lib/site'

describe('LoveStory', () => {
  it('opens the band with the centred title block', () => {
    render(<LoveStory />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(STORY_TITLE)
  })

  it('sets the story on the scarlet panel with its text inset', () => {
    const { container } = render(<LoveStory />)

    const panel = container.querySelector('.damask-red') as HTMLElement

    expect(panel).not.toBeNull()
    expect(panel).toHaveClass('flex', 'items-center', 'lg:min-h-[583px]')

    const text = panel.firstElementChild as HTMLElement

    expect(text).toHaveClass('pl-[40px]', 'md:pl-[94px]', 'lg:pl-[121px]', 'xl:pl-[150px]')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('The Proposal')

    for (const line of STORY_PANEL_PARAGRAPHS) {
      expect(screen.getByText(line)).toHaveClass('text-white')
    }
  })

  it('hangs the photograph below and left of the panel on desktop', () => {
    render(<LoveStory />)

    const photo = screen.getByRole('img')

    expect(photo.getAttribute('src')).toContain('picsum.photos/seed/matrimony-19')
    expect(photo).toHaveClass('lg:relative', 'lg:-bottom-[51px]', 'lg:-left-[30px]', 'lg:mt-0')
  })
})
