import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CausesCarousel } from './CausesCarousel'
import { CAUSES } from '../data'

describe('CausesCarousel', () => {
  it('renders the centered heading and paragraph', () => {
    const { container } = render(<CausesCarousel />)

    const heading = screen.getByRole('heading', {
      level: 2,
      name: "Let's build the world without child abuse and neglect",
    })
    expect(heading.className).toMatch(/font-black/)
    // Centered via the heading-section wrapper (source .heading-section.text-center).
    const wrapper = heading.closest('div') as HTMLElement
    expect(wrapper.className).toMatch(/text-center/)
    expect(container.querySelector('section p')).not.toBeNull()
  })

  it('renders all five cause items with the source titles', () => {
    render(<CausesCarousel />)

    for (const cause of CAUSES) {
      expect(screen.getByRole('heading', { name: cause.title })).toBeInTheDocument()
    }
  })

  it('renders each cause as a 200px circular photo with a seeded picsum image', () => {
    const { container } = render(<CausesCarousel />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(5)
    images.forEach((img, i) => {
      expect(img.getAttribute('src')).toContain(`picsum.photos/seed/succor-cause-${i + 1}/400/400`)
      const circle = img.parentElement as HTMLElement
      expect(circle.className).toMatch(/rounded-full/)
      expect(circle.className).toMatch(/h-\[200px\]/)
      expect(circle.className).toMatch(/w-\[200px\]/)
    })
  })

  it('lifts the item up 10px on hover with an 80% photo overlay', () => {
    render(<CausesCarousel />)

    const item = screen.getByRole('heading', { name: CAUSES[0]!.title }).closest('a') as HTMLElement
    expect(item.className).toMatch(/hover:-mt-\[10px\]/)
    const img = item.querySelector('img') as HTMLElement
    expect(img.className).toMatch(/group-hover:opacity-80/)
  })
})
