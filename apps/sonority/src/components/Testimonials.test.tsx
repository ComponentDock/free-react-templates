import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Customers are loving Sonority/,
    )
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Music Enthusiast')).toBeInTheDocument()
    expect(screen.getByText(/Sonority has completely changed/)).toBeInTheDocument()
  })

  it('renders 5 star rating icons', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.fill-yellow-400')
    expect(stars.length).toBe(5)
  })

  it('navigates to next testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const nextBtn = screen.getByRole('button', { name: 'Next testimonial' })
    await user.click(nextBtn)

    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Podcast Creator')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const prevBtn = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prevBtn)

    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('navigates to a specific testimonial via dot indicator', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dot = screen.getByRole('button', { name: 'Go to testimonial 3' })
    await user.click(dot)

    expect(screen.getByText('Emma Davis')).toBeInTheDocument()
  })

  it('renders the avatar image', () => {
    render(<Testimonials />)
    const img = screen.getByAltText('Sarah Johnson')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
