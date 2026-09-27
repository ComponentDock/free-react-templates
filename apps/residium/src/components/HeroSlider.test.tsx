import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders heading and CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /We Create your dream apartment/,
    )
    expect(screen.getByRole('link', { name: /View Project/i })).toBeInTheDocument()
  })

  it('renders background overlay div', () => {
    const { container } = render(<HeroSlider />)
    const overlay = container.querySelector('.bg-black\\/41')
    expect(overlay).toBeInTheDocument()
  })
})
