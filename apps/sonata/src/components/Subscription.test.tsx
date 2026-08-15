import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Subscription } from './Subscription'

const PERKS = [
  'Play any track',
  'Listen offline',
  'No ad interruptions',
  'Unlimited skips',
  'High quality audio',
  'Shuffle play',
]

describe('Subscription', () => {
  it('renders the subscription copy and the six checkmarked perks', () => {
    render(<Subscription />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Subscription from \$15\/month/)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Start a free trial now' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Try it now' })).toBeInTheDocument()

    for (const perk of PERKS) {
      expect(screen.getByText(perk)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })
})
