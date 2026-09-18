import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /People.*Says/i })).toBeInTheDocument()
  })

  it('shows the first review by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('David Brown')).toBeInTheDocument()
    expect(screen.getByText(/incredibly friendly and professional/)).toBeInTheDocument()
  })

  it('navigates to next review', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next review/i }))
    expect(screen.getByText('Lisa Martinez')).toBeInTheDocument()
  })

  it('navigates to previous review', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous review/i }))
    expect(screen.getByText('Rachel Kim')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to review 3/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })
})
