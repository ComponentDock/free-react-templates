import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the About Us heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('About Us')
  })

  it('renders the main heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We speak the good food language',
    )
  })

  it('renders a Learn More button', () => {
    render(<AboutSection />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders about images with alt text', () => {
    render(<AboutSection />)
    expect(screen.getByAltText('Restaurant interior')).toBeInTheDocument()
    expect(screen.getByAltText('Plated dish')).toBeInTheDocument()
  })
})
