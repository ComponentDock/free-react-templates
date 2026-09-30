import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the dark plum band with the first quote card', () => {
    render(<Testimonials />)
    const heading = screen.getByRole('heading', { name: /Process starts as soon/ })
    expect(heading).toBeInTheDocument()
    const section = heading.closest('section')
    expect(section?.style.backgroundImage).toContain('boostly-testimonial')
    expect(
      screen.getByText(/The automated process starts as soon as your clothes/),
    ).toBeInTheDocument()
    expect(screen.getByText('- Robert Brown')).toBeInTheDocument()
    expect(screen.getByText('CEO of Boostly')).toBeInTheDocument()
  })

  it('renders three dot indicators', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Show testimonial/ })).toHaveLength(3)
  })

  it('switches slides when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(screen.queryByText(/From the first workflow/)).not.toBeInTheDocument()

    await user.click(dots[1]!)
    expect(screen.getByText(/From the first workflow/)).toBeInTheDocument()
    expect(screen.getByText('- Angela Moss')).toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).not.toHaveAttribute('aria-current')

    await user.click(dots[2]!)
    expect(screen.getByText('- Daniel Cruz')).toBeInTheDocument()
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })

  it('returns to the first slide when its dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    await user.click(dots[1]!)
    await user.click(dots[0]!)
    expect(screen.getByText('- Robert Brown')).toBeInTheDocument()
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })
})
