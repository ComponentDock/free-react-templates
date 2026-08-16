import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first quote and the founder name', () => {
    render(<Testimonials />)

    expect(screen.getByRole('blockquote')).toHaveTextContent(/Life is very short/)
    expect(screen.getByText('- Manuel Labor')).toBeInTheDocument()
  })

  it('advances slides with the dot navigation', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('tab')
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-selected', 'true')

    await user.click(dots[1]!)
    expect(dots[1]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('blockquote')).toHaveTextContent(/sharp strategic thinking/)
  })
})
