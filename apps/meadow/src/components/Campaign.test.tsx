import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Campaign } from './Campaign'
import { campaignCta, campaigns } from '../data'

describe('Campaign', () => {
  it('shows the Project subheading and Our Campaign heading on the light band', () => {
    render(<Campaign />)
    const section = screen.getByTestId('campaign-section')
    expect(section).toHaveClass('bg-mist')
    expect(screen.getByText('Project')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Campaign' })).toBeInTheDocument()
  })

  it('renders four photo cards with chips, titles, distinct progress bars, and raised/goal figures', () => {
    render(<Campaign />)
    const cards = screen.getAllByTestId('campaign-card')
    expect(cards.length).toBe(campaigns.length)
    campaigns.forEach((item, i) => {
      expect(within(cards[i]!).getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(within(cards[i]!).getByText(item.chip)).toBeInTheDocument()
    })
    const bars = screen.getAllByRole('progressbar')
    expect(bars.length).toBe(campaigns.length)
    const values = bars.map((bar) => bar.getAttribute('aria-valuenow'))
    expect(new Set(values).size).toBe(campaigns.length)
    for (const item of campaigns) {
      expect(screen.getByText(`Raised: ${item.raised} / Goal: ${item.goal}`)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: campaignCta }).length).toBe(campaigns.length)
  })
})
