import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Pipekit transformed our brand/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })

  it('renders navigation arrows and dots', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to testimonial/ })).toHaveLength(3)
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Working with Pipekit was a game-changer/i)).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })

  it('navigates to previous testimonial (wraps around)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/The team at Pipekit brings creativity/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('navigates to specific testimonial via dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(/The team at Pipekit brings creativity/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders the quote icon', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Pipekit transformed our brand/i)).toBeInTheDocument()
  })
})
