import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders feature titles', () => {
    render(<AboutSection />)
    expect(screen.getByText('Fast support to all our clients')).toBeInTheDocument()
    expect(screen.getByText('Creative solutions delivered')).toBeInTheDocument()
    expect(screen.getByText('Expert team on your side')).toBeInTheDocument()
  })

  it('renders person info', () => {
    render(<Footer />)
    expect(screen.getAllByText('Michael Smith').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Manager').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the about image', () => {
    render(<AboutSection />)
    const img = screen.getByRole('img', { name: /about our team/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})

function Footer() {
  return <AboutSection />
}
