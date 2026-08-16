import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('shows the eyebrow and heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
  })

  it('shows the first testimonial with avatar, quote, name and Customer', () => {
    render(<Testimonials />)
    const first = testimonials.items[0]!
    // quotes render wrapped in curly quotes — match as a substring
    const quote = screen.getByText(new RegExp(first.quote))
    expect(quote).toBeInTheDocument()
    const figure = quote.closest('figure')!
    expect(within(figure).getByText(first.name)).toBeInTheDocument()
    expect(within(figure).getByText('Customer')).toBeInTheDocument()
    // avatar is decorative (alt="") — no img role, query directly
    expect(figure.querySelector('img')).toHaveAttribute('src', first.avatar)
  })

  it('advances to the next testimonial via the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const track = screen.getByTestId('testimonial-track')
    expect(track).toHaveStyle('transform: translateX(-0%)')
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track).toHaveStyle('transform: translateX(-100%)')
  })

  it('wraps backwards via the previous control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const track = screen.getByTestId('testimonial-track')
    // 0 -> 1 -> 2 via next twice, then prev wraps to 1
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track).toHaveStyle('transform: translateX(-100%)')
    // prev from 0 wraps to the last slide (-200%)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track).toHaveStyle('transform: translateX(-200%)')
  })

  it('jumps to a testimonial via the dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const track = screen.getByTestId('testimonial-track')
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(track).toHaveStyle('transform: translateX(-200%)')
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 1' }))
    expect(track).toHaveStyle('transform: translateX(-0%)')
  })
})
