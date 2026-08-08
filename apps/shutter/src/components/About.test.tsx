import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, biography, and awards list', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Elena' })).toBeInTheDocument()
    expect(screen.getByText(/over 12 years of experience/i)).toBeInTheDocument()
    expect(
      screen.getByText(/published in Vogue, National Geographic, and Harper/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Awards & Recognition' })).toBeInTheDocument()
    for (const award of [
      'International Photography Award - Gold (2024)',
      'Fearless Photographer of the Year (2023)',
      'National Geographic Featured Photographer',
      'Best Wedding Photographer - NYC (2022)',
    ]) {
      expect(screen.getByText(award)).toBeInTheDocument()
    }
  })

  it('renders a portrait image with descriptive alt text', () => {
    render(<About />)
    const image = screen.getByRole('img', { name: /photographer at work/i })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/shutter-about/600/700')
  })
})
