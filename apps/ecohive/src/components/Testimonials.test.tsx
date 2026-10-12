import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial with its quote, initials and founder line', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Moving our shop across took a single afternoon/)).toBeInTheDocument()
    expect(screen.getByText('NO')).toBeInTheDocument()
    expect(screen.getByText('Nadia Okoye')).toBeInTheDocument()
    expect(screen.getByText('Owner, Okoye Ceramics')).toBeInTheDocument()
  })

  it('renders one indicator per testimonial with the first one current', () => {
    render(<Testimonials />)
    const indicators = screen.getAllByRole('button', { name: /^Show testimonial/ })
    expect(indicators).toHaveLength(2)
    expect(indicators[0]).toHaveAttribute('aria-current', 'true')
    expect(indicators[1]!).not.toHaveAttribute('aria-current')
  })

  it('swaps to the second testimonial when its indicator is activated', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const indicators = screen.getAllByRole('button', { name: /^Show testimonial/ })

    await user.click(indicators[1]!)
    expect(indicators[1]!).toHaveAttribute('aria-current', 'true')
    expect(screen.queryByText('Nadia Okoye')).not.toBeInTheDocument()
    expect(screen.getByText('MH')).toBeInTheDocument()
    expect(screen.getByText('Marek Halvorsen')).toBeInTheDocument()
    expect(screen.getByText('Freelance web developer')).toBeInTheDocument()
  })
})
