import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroImage } from './HeroImage'

describe('HeroImage', () => {
  it('renders the hero image with correct alt text', () => {
    render(<HeroImage />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toBeInTheDocument()
  })

  it('uses a seeded picsum URL for deterministic images', () => {
    render(<HeroImage />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regsnap/400/600')
  })

  it('has appropriate sizing classes', () => {
    render(<HeroImage />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toHaveClass('w-full')
    expect(img).toHaveClass('h-full')
  })

  it('applies object-cover for proper image scaling', () => {
    render(<HeroImage />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toHaveClass('object-cover')
  })

  it('is hidden on mobile screens', () => {
    render(<HeroImage />)
    const container = screen.getByRole('img', { name: /registration/i }).parentElement
    expect(container).toHaveClass('hidden')
  })
})
