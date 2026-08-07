import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

const quotes = [
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
]

/** The card renders quotes wrapped in decorative curly quotes (as in the original design). */
const cardQuote = (quote: string) => new RegExp(`“${quote.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}”`)

describe('Testimonials', () => {
  it('shows the heading and the first testimonial with an author', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText(cardQuote(quotes[0] ?? ''))).toBeInTheDocument()
    expect(screen.getByText('Jessica Smith, Client')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'load more' })).toBeInTheDocument()
  })

  it('moves to the next testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(cardQuote(quotes[1] ?? ''))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(cardQuote(quotes[2] ?? ''))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(cardQuote(quotes[0] ?? ''))).toBeInTheDocument()
  })

  it('moves to the previous testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(cardQuote(quotes[2] ?? ''))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(cardQuote(quotes[1] ?? ''))).toBeInTheDocument()
  })
})
