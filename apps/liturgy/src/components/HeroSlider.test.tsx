import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide headline', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { name: 'Arise, Shine' })).toBeInTheDocument()
  })

  it('renders the first slide CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: 'Watch Now' })).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(2)
  })

  it('switches slide on dot click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const secondDot = screen.getByRole('button', { name: 'Go to slide 2' })
    await user.click(secondDot)
    expect(
      screen.getByRole('heading', { name: 'Explore Our Weekend Services' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore Now' })).toBeInTheDocument()
  })

  it('renders slide text content', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/Join our community of faith/)).toBeInTheDocument()
  })

  it('has accessible slide navigation', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots[0]).toHaveAttribute('aria-label', 'Go to slide 1')
    expect(dots[1]).toHaveAttribute('aria-label', 'Go to slide 2')
  })
})
