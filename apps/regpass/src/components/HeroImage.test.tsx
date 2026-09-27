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
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regpass/1200/400')
  })

  it('has full width and appropriate height', () => {
    render(<HeroImage />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toHaveClass('w-full')
    expect(img).toHaveClass('h-64')
  })

  it('applies object-cover for proper image scaling', () => {
    render(<HeroImage />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toHaveClass('object-cover')
  })
})
