import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first quote card with avatar and author name', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Ken Davis' })).toBeInTheDocument()
    expect(screen.getByText('Ken Davis')).toBeInTheDocument()
  })

  it('advances and wraps the quotes with the arrows', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText('Ken Davis')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Mellisa Griffin')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Ken Davis')).toBeInTheDocument()
  })
})
