import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('renders the About Us heading', () => {
    render(<AboutUs />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the main description', () => {
    render(<AboutUs />)
    expect(screen.getByText('We Solve Your Financial Problem')).toBeInTheDocument()
  })

  it('renders a CTA button', () => {
    render(<AboutUs />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<AboutUs />)
    expect(screen.getByAltText('About our banking services')).toBeInTheDocument()
  })
})
