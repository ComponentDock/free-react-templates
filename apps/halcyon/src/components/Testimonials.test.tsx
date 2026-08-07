import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading "Testimonials"', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
  })

  it('shows the first testimonial card with a circular photo, name and quote', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 3, name: 'Mike Fisher' })).toBeInTheDocument()
    expect(screen.getByText(/feel like a completely different person/i)).toBeInTheDocument()
    const photo = screen.getByRole('img', { name: /Mike Fisher/i })
    expect(photo.className).toContain('rounded-full')
  })

  it('shows "Prev" and "Next" buttons', () => {
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Prev' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('cycles to the next testimonial with Next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Sarah Miles' })).toBeInTheDocument()
  })

  it('cycles back to the previous testimonial with Prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Prev' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Amelia Clarke' })).toBeInTheDocument()
  })

  it('wraps around from the last testimonial back to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Amelia Clarke' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Mike Fisher' })).toBeInTheDocument()
  })
})
