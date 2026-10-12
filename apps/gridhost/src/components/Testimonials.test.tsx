import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders both founder slides with the pink name, muted role and 20px quote', () => {
    render(<Testimonials />)

    const first = screen.getByTestId('testimonial-0')
    expect(first).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByTestId('testimonial-1')).toHaveAttribute('aria-hidden', 'true')

    expect(screen.getByText('Marta Oduya')).toHaveClass('text-[30px]', 'text-brand')
    expect(screen.getByText('Owner, Bright Loom Studio')).toHaveClass('text-muted')
    expect(
      screen.getByText(/We moved nine client sites onto the grid in a single weekend/).tagName,
    ).toBe('BLOCKQUOTE')

    expect(screen.getByRole('img', { name: 'Illustration of a support engineer at a desk' })).toBeInTheDocument()
  })

  it('moves between the two slides with the asymmetric edge arrows and has no dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const previous = screen.getByRole('button', { name: 'Previous testimonial' })
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    expect(previous).toHaveClass('text-arrow-prev')
    expect(next).toHaveClass('text-brand')
    expect(screen.queryAllByRole('tab')).toHaveLength(0)

    await user.click(next)
    expect(screen.getByTestId('testimonial-1')).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByTestId('testimonial-0')).toHaveAttribute('aria-hidden', 'true')

    await user.click(previous)
    expect(screen.getByTestId('testimonial-0')).toHaveAttribute('aria-hidden', 'false')

    await user.click(previous)
    expect(screen.getByTestId('testimonial-1')).toHaveAttribute('aria-hidden', 'false')
  })
})
