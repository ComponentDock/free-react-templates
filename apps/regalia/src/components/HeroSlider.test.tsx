import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('displays the heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Experience Luxury Living')).toBeInTheDocument()
  })

  it('displays the subtitle', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/Where elegance meets comfort/)).toBeInTheDocument()
  })

  it('displays the CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Book Your Stay')).toBeInTheDocument()
  })

  it('links CTA to reservation section', () => {
    render(<HeroSlider />)
    const link = screen.getByText('Book Your Stay')
    expect(link).toHaveAttribute('href', '#reservation')
  })

  it('displays hero image', () => {
    render(<HeroSlider />)
    const img = screen.getByAltText('Luxury hotel exterior')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('regalia-hero'))
  })
})
