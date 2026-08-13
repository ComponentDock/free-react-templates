import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, subtext, and four plan cards with prices', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Pricing' })).toBeInTheDocument()

    for (const name of ['Free', 'Startup', 'Premium', 'Pro']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    // The price markup splits $ / number / /mo across child elements, so
    // match against the paragraph's full textContent.
    for (const price of ['$0/mo', '$19/mo', '$49/mo', '$99/mo']) {
      expect(
        screen.getByText((_content, element) => element?.textContent === price),
      ).toBeInTheDocument()
    }

    expect(screen.getAllByRole('button', { name: 'Choose Plan' })).toHaveLength(4)
  })

  it('shows the feature rows for every plan', () => {
    render(<Pricing />)

    expect(screen.getByText('100% free. Forever')).toBeInTheDocument()
    expect(screen.getAllByText('All features are included')).toHaveLength(3)

    const featureCounts: Array<[string, number]> = [
      ['150 GB Bandwidth', 1],
      ['100 GB Storage', 1],
      ['$1.00 / GB Overages', 1],
      ['450 GB Bandwidth', 2],
      ['400 GB Storage', 2],
      ['$2.00 / GB Overages', 1],
      ['250 GB Bandwidth', 1],
      ['200 GB Storage', 1],
      ['$5.00 / GB Overages', 1],
      ['$20.00 / GB Overages', 1],
    ]
    for (const [feature, count] of featureCounts) {
      expect(screen.getAllByText(feature)).toHaveLength(count)
    }

    expect(screen.getAllByText('All features')).toHaveLength(4)
  })

  it('highlights the Premium card in green with a blue Choose Plan button', () => {
    render(<Pricing />)

    const premiumCard = screen
      .getByRole('heading', { level: 3, name: 'Premium' })
      .closest('article')
    expect(premiumCard).not.toBeNull()
    expect(premiumCard!.className).toContain('bg-accent-500')

    const buttons = screen.getAllByRole('button', { name: 'Choose Plan' })
    expect(buttons[2]!.className).toContain('bg-primary-600')
    for (const [index, button] of buttons.entries()) {
      if (index !== 2) {
        expect(button.className).toContain('bg-accent-500')
      }
    }
  })
})
