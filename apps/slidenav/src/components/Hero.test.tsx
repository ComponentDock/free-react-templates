import { render } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('is one flat coral band that fills the viewport and is the page surface', () => {
    const { container } = render(<Hero />)

    const bands = container.querySelectorAll('[data-band]')

    expect(bands).toHaveLength(1)
    expect(bands[0]).toHaveClass('min-h-screen', 'w-full', 'bg-band')
  })

  it('holds the six labelled panels in navigation order, each with a scroll margin', () => {
    const { container } = render(<Hero />)

    const sections = Array.from(container.querySelectorAll('section[id]'))

    expect(sections.map((section) => section.id)).toEqual([
      'home',
      'portfolio',
      'about',
      'services',
      'blog',
      'contact',
    ])

    for (const section of sections) {
      expect(section).toHaveClass('scroll-mt-32')
    }

    expect(sections[0]).toHaveClass('first:border-t-0', 'first:pt-0')
  })
})
