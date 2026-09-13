import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the about section with heading and content', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('A Luxurious Hotel with Nature')).toBeInTheDocument()
  })

  it('renders the learn more link', () => {
    render(<AboutSection />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders placeholder images', () => {
    render(<AboutSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
