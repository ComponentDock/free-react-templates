import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { name: 'Testimonial from our Clients', level: 2 }),
    ).toBeInTheDocument()
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })

  it('cycles slides with the next and previous controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Amelia Watson')).toBeInTheDocument()
    expect(screen.getByText('2 / 4')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
  })

  it('wraps around at the last slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    for (let i = 0; i < 4; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })
})
