import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroCta, heroDate, heroImage, heroNames, heroTagline } from '../data'

describe('Hero', () => {
  it('renders the full-bleed photo with the brand badge content', () => {
    const { container } = render(<Hero />)
    expect(screen.getByText(heroDate)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(new RegExp(heroNames))
    expect(heading).toHaveTextContent(new RegExp(heroTagline))
    expect(screen.getByText(heroCta)).toBeInTheDocument()

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', heroImage)
    expect(image).toHaveAttribute('alt', expect.stringContaining('valley'))
  })

  it('keeps the badge rotated on desktop and unrotated on mobile', () => {
    const { container } = render(<Hero />)
    const badge = container.querySelector('[data-testid="hero-badge"]')
    expect(badge).not.toBeNull()
    expect(badge!.className).toContain('rotate(45deg)')
    expect(badge!.className).toContain('max-md:[transform:translate(-50%,-50%)_rotate(0deg)]')
  })
})
