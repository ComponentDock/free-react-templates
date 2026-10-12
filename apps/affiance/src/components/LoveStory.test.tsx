import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { LoveStory } from './LoveStory'
import { MILESTONES } from '../lib/site'
import { mockReducedMotion } from '../test/match-media'

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})

/** Every milestone card, in the order the band lays them out. */
function panels(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('li > div')).filter((node) =>
    node.className.includes('shadow-panel'),
  ) as HTMLElement[]
}

describe('LoveStory', () => {
  it('runs the band over a fixed photograph under the design scrim', () => {
    const { container } = render(<LoveStory />)

    const photo = screen.getByTestId('lovestory-photo')

    expect(photo).toHaveClass('bg-fixed', 'absolute', 'inset-0')
    expect(photo.style.backgroundImage).toContain('picsum.photos/seed/affiance-29/1920/1200')
    expect(container.querySelector('.bg-scrim')).toBeInTheDocument()
  })

  it('strays the four milestones to either side of the line', () => {
    const { container } = render(<LoveStory />)

    const cards = panels(container)

    expect(cards).toHaveLength(4)
    expect(cards[0] as HTMLElement).toHaveClass('md:mr-auto')
    expect(cards[1] as HTMLElement).not.toHaveClass('md:mr-auto')

    expect(screen.getByText(MILESTONES[0]!.date)).toHaveClass('uppercase')
    expect(screen.getByRole('heading', { level: 3, name: MILESTONES[3]!.title })).toHaveClass(
      'font-script',
      'text-white',
    )
  })

  it('paints the double dashed frame and the corner watermark on every card', () => {
    const { container } = render(<LoveStory />)

    const card = panels(container)[0] as HTMLElement
    const frames = Array.from(card.querySelectorAll('span[aria-hidden="true"]'))
    const mark = card.querySelector('svg') as unknown as HTMLElement

    expect(frames).toHaveLength(2)
    expect(frames[0]).toHaveClass('inset-[20px]', 'border-dashed', 'border-frame')
    expect(frames[1]).toHaveClass('rotate-1')
    expect(mark).toHaveClass('left-0', 'top-[20px]')
  })

  it('sets a circular photograph badge on the centre line', () => {
    const { container } = render(<LoveStory />)

    const badges = Array.from(container.querySelectorAll('li > div:not([class*="shadow-panel"])'))

    expect(badges).toHaveLength(4)
    expect(badges[0] as HTMLElement).toHaveClass('rounded-full', 'md:left-1/2')
    expect((badges[0] as HTMLElement).querySelector('span')).toHaveClass(
      'inset-[10px]',
      'rounded-full',
      'border-dashed',
    )
    expect(((badges[0] as HTMLElement).querySelector('img') as HTMLImageElement).src).toContain(
      'picsum.photos/seed/affiance-11/240/240',
    )
  })

  it('drifts the photograph at half the scroll rate', () => {
    render(<LoveStory />)

    const photo = screen.getByTestId('lovestory-photo')

    expect(photo.style.transform).toBe('translateY(0px)')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 120 })
    fireEvent.scroll(window)

    expect(photo.style.transform).toBe('translateY(60px)')
  })

  it('leaves the photograph still for a visitor who asks for reduced motion', () => {
    mockReducedMotion()

    render(<LoveStory />)

    expect(screen.getByTestId('lovestory-photo').style.transform).toBe('')
  })
})
