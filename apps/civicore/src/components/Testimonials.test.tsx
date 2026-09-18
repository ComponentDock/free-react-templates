import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /happy employees/i })).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/civicore made my job search/i)).toBeInTheDocument()
    expect(screen.getByText(/the platform is intuitive/i)).toBeInTheDocument()
  })

  it('renders testimonial names and companies', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Tech Solutions Inc.')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Digital Dynamics')).toBeInTheDocument()
  })

  it('updates active dot on hover', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const articles = screen.getAllByRole('article')
    await user.hover(articles[1]!)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots[1]).toHaveClass('bg-brand')
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    await user.click(dots[1]!)
    expect(dots[1]).toHaveClass('bg-brand')
    expect(dots[0]).toHaveClass('bg-gray-300')
  })
})
