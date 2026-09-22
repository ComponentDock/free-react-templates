import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the Deluxe Room heading', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Deluxe Room')
  })

  it('renders the testimonial quote', () => {
    render(<Intro />)
    expect(screen.getByText(/unforgettable stay/)).toBeInTheDocument()
  })

  it('renders the client name', () => {
    render(<Intro />)
    expect(screen.getByText('— Michael Williams, Client')).toBeInTheDocument()
  })

  it('renders star rating', () => {
    render(<Intro />)
    // 5 stars + the icon in RoomFeatures = check for 5 stars with fill-brand class
    const stars = document.querySelectorAll('.fill-brand')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
