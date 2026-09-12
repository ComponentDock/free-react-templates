import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Senior Care Center is for Your Family',
    )
  })

  it('renders description text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/exceptional elderly care services/)).toBeInTheDocument()
  })

  it('renders checklist items', () => {
    render(<AboutSection />)
    expect(screen.getByText('Certified and experienced staff')).toBeInTheDocument()
    expect(screen.getByText('24/7 medical assistance available')).toBeInTheDocument()
    expect(screen.getByText('Comfortable and safe environment')).toBeInTheDocument()
  })

  it('renders the media card text', () => {
    render(<AboutSection />)
    expect(screen.getByText('You can live here with love')).toBeInTheDocument()
  })
})
