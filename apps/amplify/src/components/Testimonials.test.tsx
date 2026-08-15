import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

const [first] = testimonials
const [, second] = testimonials

describe('Testimonials', () => {
  it('renders a slide with photo, quote, five stars, author name and role', () => {
    const { container } = render(<Testimonials />)
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(screen.getByText(new RegExp(first!.quote.slice(0, 40)))).toBeInTheDocument()
    const visibleQuote = [...container.querySelectorAll('blockquote')].find(
      (quote) => quote.getAttribute('aria-hidden') !== 'true',
    )
    expect(visibleQuote?.querySelectorAll('[data-star]').length).toBe(5)
    expect(screen.getByText(first!.name)).toBeInTheDocument()
    expect(screen.getByText(first!.role)).toBeInTheDocument()
  })

  it('cycles between slides with the next and previous controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(second!.name)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(first!.name)).toBeInTheDocument()
  })
})
