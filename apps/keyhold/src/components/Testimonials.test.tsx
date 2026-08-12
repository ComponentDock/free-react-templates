import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the subheading and section heading', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
  })

  it('shows the first testimonial with quote, avatar, name, and position', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringMatching(/picsum\.photos/),
    )
    expect(screen.getByText(/found my dream home/i)).toBeInTheDocument()
  })

  it('cycles through testimonials with next and previous controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: /next testimonial/i })
    const prev = screen.getByRole('button', { name: /previous testimonial/i })

    await user.click(next)
    expect(screen.queryByText('Roger Scott')).not.toBeInTheDocument()

    // Wraps around from the last item back to the first.
    for (let i = 0; i < 4; i += 1) {
      await user.click(next)
    }
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()

    // Previous from the first item wraps to the last.
    await user.click(prev)
    expect(screen.queryByText('Roger Scott')).not.toBeInTheDocument()
  })
})
