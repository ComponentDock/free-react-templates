import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and star rating', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Are Clients Says/i })).toBeInTheDocument()
  })

  it('displays the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText(/Techwise transformed our digital presence/i)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('CEO, StartupHub')).toBeInTheDocument()
  })

  it('navigates to previous testimonial (wraps from first to last)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Currently at index 0, pressing prev should wrap to last
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Jennifer Adams')).toBeInTheDocument()
    expect(screen.getByText('Director of Marketing')).toBeInTheDocument()
  })

  it('navigates previous from non-zero index (no wrap)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    // Go back to index 0
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
  })

  it('navigates through all testimonials forward then wraps', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    // Go to index 2
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Jennifer Adams')).toBeInTheDocument()
    // Go to index 0 (wrap)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
  })

  it('renders five star icons', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('[aria-hidden="true"]')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
