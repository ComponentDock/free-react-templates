import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders three avatar tabs', () => {
    render(<Testimonials />)
    expect(screen.getByText('Angela Smith')).toBeInTheDocument()
    expect(screen.getByText('Joshua Hamilton')).toBeInTheDocument()
    expect(screen.getByText('Janice Bruce')).toBeInTheDocument()
  })

  it('defaults to first testimonial', () => {
    render(<Testimonials />)
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveTextContent(/far far away/i)
  })

  it('switches testimonial on avatar click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByText('Joshua Hamilton'))
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveTextContent(/paradisematic country/i)
  })

  it('shows author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('— Angela Smith')).toBeInTheDocument()
    const roles = screen.getAllByText('CEO, Co-Founder')
    expect(roles.length).toBeGreaterThanOrEqual(1)
  })
})
