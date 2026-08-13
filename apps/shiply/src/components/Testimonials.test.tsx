import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the heading and four slides with the first visible', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3, hidden: true })).toHaveLength(4)
    expect(screen.getByRole('heading', { level: 3, name: 'John Smith' })).toBeInTheDocument()
  })

  it('navigates between slides with the circular controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    expect(prev).toBeDisabled()
    await user.click(next)
    expect(screen.getByRole('heading', { level: 3, name: 'Christine Aguilar' })).toBeInTheDocument()
    await user.click(prev)
    expect(screen.getByRole('heading', { level: 3, name: 'John Smith' })).toBeInTheDocument()
  })
})
