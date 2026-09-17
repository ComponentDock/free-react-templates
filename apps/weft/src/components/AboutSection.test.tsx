import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the about heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Us')
  })

  it('renders descriptive text about the agency', () => {
    render(<AboutSection />)
    expect(screen.getByText(/Weft is a creative agency/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<AboutSection />)
    const img = screen.getByAltText('About Weft creative agency')
    expect(img).toBeInTheDocument()
  })
})
