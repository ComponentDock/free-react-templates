import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first slide by default', () => {
    render(<Testimonials />)
    const section = screen.getByRole('region', { name: 'Testimonials' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Testimonials' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Alice Campbell')).toBeInTheDocument()
    expect(screen.queryByText('Ben Smith')).not.toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Alice Campbell/ })).toBeInTheDocument()
    expect(screen.getByText('Advertising Agency')).toBeInTheDocument()
  })

  it('moves between slides with next and previous arrows, wrapping around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })

    await user.click(next)
    expect(screen.getByText('Ben Smith')).toBeInTheDocument()

    await user.click(next)
    expect(screen.getByText('James Anderson')).toBeInTheDocument()

    // wrap forward back to the first slide
    await user.click(next)
    expect(screen.getByText('Maria Gonzales')).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText('Alice Campbell')).toBeInTheDocument()

    // wrap backward to the last slide
    await user.click(prev)
    expect(screen.getByText('Maria Gonzales')).toBeInTheDocument()
  })
})
