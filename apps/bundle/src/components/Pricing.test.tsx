import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing table with three Standard plan cards, features, and purchase links', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Table' })).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 3, name: 'Standard' })).toHaveLength(3)
    expect(screen.getAllByText('For the individuals')).toHaveLength(3)
    expect(screen.getAllByText('£199')).toHaveLength(3)

    for (const feature of [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ]) {
      expect(screen.getAllByText(feature)).toHaveLength(3)
    }

    expect(screen.getAllByRole('link', { name: 'Purchase Plan' })).toHaveLength(3)
  })
})
