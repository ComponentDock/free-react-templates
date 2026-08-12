import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first slide with quote, author and avatar', () => {
    const { container } = render(<Testimonials />)

    expect(
      screen.getByText(/Working in conjunction with humanitarian aid agencies/),
    ).toBeInTheDocument()
    expect(screen.getByText('- Jquileen')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('navigates between slides with the next and previous buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    expect(prev).toBeDisabled()

    await user.click(next)
    expect(screen.getByText(/The courses transformed how I work/)).toBeInTheDocument()
    expect(screen.getByText('- Miranda')).toBeInTheDocument()
    expect(screen.queryByText(/humanitarian aid agencies/)).not.toBeInTheDocument()
    expect(next).toBeDisabled()

    await user.click(prev)
    expect(screen.getByText(/humanitarian aid agencies/)).toBeInTheDocument()
    expect(prev).toBeDisabled()
  })
})
