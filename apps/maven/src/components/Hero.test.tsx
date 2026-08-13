import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the two-line headline, sub-line, CTA button, and framed photo', () => {
    const { container } = render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Think Creative')
    expect(heading).toHaveTextContent('Turn')

    expect(screen.getByText('Ideas Into Life')).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: /Learn More/i })
    expect(cta).toHaveAttribute('href', '#about')

    const photo = container.querySelector('img')
    expect(photo).toBeInTheDocument()
    expect(photo).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/maven-hero'))
  })

  it('decorates the hero with light gray background and abstract shards', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('section')).toHaveClass('bg-hero-bg')
    expect(container.querySelectorAll('[aria-hidden="true"]').length).toBeGreaterThanOrEqual(4)
  })

  it('anchors the CTA to the about section', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#about')
  })
})
