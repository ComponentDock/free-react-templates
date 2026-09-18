import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the tagline', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/Quality work\. Trustable service/i)).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/We provide your Industrial solution/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('CTA button links somewhere', () => {
    render(<HeroSlider />)
    const link = screen.getByText('Our Services').closest('a')
    expect(link).toHaveAttribute('href')
  })
})
