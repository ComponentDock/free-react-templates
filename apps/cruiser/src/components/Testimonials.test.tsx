import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the initial testimonial quote and author', () => {
    render(<Testimonials />)

    expect(screen.getByText(/Cruiser transformed my skating completely/)).toBeInTheDocument()
    expect(screen.getByText('Tyler Brooks')).toBeInTheDocument()
    expect(screen.getByText('Street Skater')).toBeInTheDocument()
  })

  it('renders the testimonial author image', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Tyler Brooks')).toBeInTheDocument()
  })

  it('renders prev/next navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('renders dot indicators for all testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 4' })).toBeInTheDocument()
  })

  it('navigates to next testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const nextBtn = screen.getByRole('button', { name: 'Next testimonial' })
    await user.click(nextBtn)

    expect(screen.getByText(/group sessions are incredible/)).toBeInTheDocument()
    expect(screen.getByText('Emma Walsh')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const prevBtn = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prevBtn)

    // Wraps around to the last testimonial
    expect(screen.getByText(/Best decision I ever made/)).toBeInTheDocument()
    expect(screen.getByText('Lisa Tanaka')).toBeInTheDocument()
  })

  it('navigates to specific testimonial via dot indicator', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(/video analysis sessions are a game-changer/)).toBeInTheDocument()
    expect(screen.getByText('Derek Simmons')).toBeInTheDocument()
  })
})
