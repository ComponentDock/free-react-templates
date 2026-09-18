import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders heading', () => {
    render(<AboutSection />)
    expect(screen.getByText('Steps to adopt & foster a child')).toBeInTheDocument()
  })

  it('renders Adopt a child now button', () => {
    render(<AboutSection />)
    expect(screen.getByText('Adopt a child now')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/We believe every child deserves/)).toBeInTheDocument()
  })

  it('CTA button links to #', () => {
    render(<AboutSection />)
    const btn = screen.getByText('Adopt a child now')
    expect(btn).toHaveAttribute('href', '#')
  })
})
