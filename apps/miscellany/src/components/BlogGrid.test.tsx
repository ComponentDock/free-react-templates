import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid'
import {
  blogCards,
  cardExcerpt,
  sliderCardLabel,
  sliderNextLabel,
  sliderPrevLabel,
  videoPlayLabel,
} from '../data'

describe('BlogGrid', () => {
  it('renders every card with a photo, meta line, title, and excerpt', () => {
    const { container } = render(<BlogGrid />)
    for (const card of blogCards) {
      expect(screen.getAllByRole('heading', { name: card.title }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('20 March 2018').length).toBeGreaterThan(0)
    expect(screen.getAllByText('By Rich').length).toBeGreaterThan(0)
    expect(screen.getAllByText(cardExcerpt).length).toBe(blogCards.length)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(blogCards.length)
  })

  it('lays out the video card wide (col-span-8) with a round play button', () => {
    render(<BlogGrid />)
    const videoCard = blogCards.find((card) => card.video)
    const play = screen.getByRole('button', { name: videoPlayLabel })
    expect(play.className).toContain('rounded-full')
    expect(play.className).toContain('h-24')
    const heading = screen.getByRole('heading', { name: videoCard!.title })
    const wide = heading.closest('div[class*="col-span-8"]')
    expect(wide).not.toBeNull()
  })

  it('cycles photos in the slider card with prev/next controls', async () => {
    const user = userEvent.setup()
    const { container } = render(<BlogGrid />)
    const sliderCard = container.querySelector(`[aria-label="${sliderCardLabel}"]`)
    expect(sliderCard).not.toBeNull()

    const img = sliderCard!.querySelector('img')
    const initialAlt = img!.getAttribute('alt')

    await user.click(screen.getByRole('button', { name: sliderNextLabel }))
    expect(sliderCard!.querySelector('img')!.getAttribute('alt')).not.toBe(initialAlt)

    await user.click(screen.getByRole('button', { name: sliderPrevLabel }))
    expect(sliderCard!.querySelector('img')!.getAttribute('alt')).toBe(initialAlt)
  })

  it('wraps the slider card photos around the last photo', async () => {
    const user = userEvent.setup()
    const { container } = render(<BlogGrid />)
    const sliderCard = container.querySelector(`[aria-label="${sliderCardLabel}"]`)
    const prev = screen.getByRole('button', { name: sliderPrevLabel })

    // Click prev until the alt cycles (wrap-around from photo 1 to photo 6)
    await user.click(prev)
    const afterWrap = sliderCard!.querySelector('img')!.getAttribute('alt')
    expect(afterWrap).toContain('6')
  })
})
