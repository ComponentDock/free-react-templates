import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the event date, title, and venue', () => {
    render(<Hero />)

    expect(screen.getByText('12 Feb, 2020')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Concert 2020')
    expect(screen.getByText('Green Avenue, New York')).toBeInTheDocument()
  })

  it('has a background image with dark overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })

    const overlay = container.querySelector('.bg-gradient-to-b')
    expect(overlay).toBeInTheDocument()
  })

  it('includes decorative SVG shapes', () => {
    const { container } = render(<Hero />)
    const svgs = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(svgs.length).toBeGreaterThanOrEqual(2)
  })
})
