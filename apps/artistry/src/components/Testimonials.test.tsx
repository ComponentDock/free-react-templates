import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('displays the section title', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Clients say' })).toBeInTheDocument()
  })

  it('displays the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Artistry brought our vision/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
  })

  it('displays circular avatar images', () => {
    render(<Testimonials />)
    const avatar = screen.getByRole('img', { name: 'Sarah Johnson' })
    expect(avatar).toHaveClass('rounded-full')
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Working with Artistry was a game-changer/)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Artistry brought our vision/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps around from last to first testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/The level of creativity/)).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Artistry brought our vision/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('renders prev and next navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })
})
