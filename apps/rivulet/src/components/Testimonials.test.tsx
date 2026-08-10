import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials, testimonialsLabel } from '../data'

describe('Testimonials', () => {
  it('shows the decorative quote glyph and the first quote with its author', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: testimonialsLabel })).toBeInTheDocument()
    expect(screen.getByText('“', { selector: 'span' })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.author)).toBeInTheDocument()
  })

  it('moves to the next quote and wraps to the first after the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next quote' }))
    expect(screen.getByText(testimonials[1]!.quote)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next quote' }))
    expect(screen.getByText(testimonials[2]!.quote)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next quote' }))
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
  })

  it('moves to the previous quote and wraps from the first to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous quote' }))
    expect(screen.getByText(testimonials[2]!.quote)).toBeInTheDocument()
  })

  it('jumps to a quote via its pagination dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Go to quote/i })
    expect(dots).toHaveLength(testimonials.length)
    await user.click(screen.getByRole('button', { name: 'Go to quote 3' }))
    const group = screen.getByRole('group', { name: 'Testimonial quotes' })
    expect(within(group).getByText(testimonials[2]!.quote)).toBeInTheDocument()
  })
})
