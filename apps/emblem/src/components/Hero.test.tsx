import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroCopy, heroImage, heroLaptopImage } from '../data'

describe('Hero', () => {
  it('renders the headline, paragraph and About Us CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Digital Agency with Excellent Services/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(heroCopy.paragraph)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'About Us' })
    expect(cta).toHaveAttribute('href', '#about')
  })

  it('renders the hero backdrop and framed laptop image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain(heroImage)
    const laptop = screen.getByRole('img', { name: /laptop/ })
    expect(laptop).toHaveAttribute('src', heroLaptopImage)
  })

  it('renders a decorative dots frame around the photo', () => {
    const { container } = render(<Hero />)
    const dots = Array.from(container.querySelectorAll('[aria-hidden="true"]')).find((el) =>
      el.getAttribute('style')?.includes('radial-gradient'),
    )
    expect(dots).not.toBeUndefined()
  })
})
