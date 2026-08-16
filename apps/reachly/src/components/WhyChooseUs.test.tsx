import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'
import { whyChooseUs } from '../data'

describe('WhyChooseUs', () => {
  it('shows the heading row, underline link, stats, paragraph and quote', () => {
    render(<WhyChooseUs />)

    expect(screen.getByText(whyChooseUs.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: whyChooseUs.heading })).toBeInTheDocument()

    const explore = screen.getByRole('link', { name: whyChooseUs.exploreLabel })
    expect(explore).toHaveAttribute('href', '#about')
    expect(explore.className).toMatch(/after:bg-brand/)

    for (const stat of whyChooseUs.stats) {
      expect(screen.getByText(stat.value + stat.suffix)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: stat.label })).toBeInTheDocument()
    }

    expect(screen.getByText(whyChooseUs.paragraph)).toBeInTheDocument()
    const quote = screen.getByText(whyChooseUs.quote)
    expect(quote.closest('blockquote')).toBeInTheDocument()
    expect(document.querySelector('svg.lucide-quote')).toBeInTheDocument()
  })
})
