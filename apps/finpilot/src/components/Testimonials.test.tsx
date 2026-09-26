import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  })

  it('renders a testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Temporibus autem quibusdam/)).toBeInTheDocument()
  })

  it('renders author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
  })

  it('navigates forward through all testimonials including wrap', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByLabelText('Next testimonial')
    // index 0 -> 1
    await user.click(nextBtn)
    expect(screen.getByText(/Neque porro quisquam/)).toBeInTheDocument()
    // index 1 -> 2 (last)
    await user.click(nextBtn)
    expect(screen.getByText(/At vero eos et accusamus/)).toBeInTheDocument()
    // index 2 -> 0 (wrap)
    await user.click(nextBtn)
    expect(screen.getByText(/Temporibus autem quibusdam/)).toBeInTheDocument()
  })

  it('navigates backward through all testimonials including wrap', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByLabelText('Previous testimonial')
    // index 0 -> 2 (wrap to last)
    await user.click(prevBtn)
    expect(screen.getByText(/At vero eos et accusamus/)).toBeInTheDocument()
    // index 2 -> 1
    await user.click(prevBtn)
    expect(screen.getByText(/Neque porro quisquam/)).toBeInTheDocument()
    // index 1 -> 0
    await user.click(prevBtn)
    expect(screen.getByText(/Temporibus autem quibusdam/)).toBeInTheDocument()
  })
})
