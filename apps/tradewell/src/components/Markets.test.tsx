import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Markets } from './Markets'

describe('Markets', () => {
  it('shows the section heading', () => {
    render(<Markets />)

    expect(
      screen.getByRole('heading', { name: 'Trade Multiple Asset Classes' }),
    ).toBeInTheDocument()
  })

  it('shows all six asset-class cards', () => {
    render(<Markets />)

    for (const name of ['Stocks', 'ETFs', 'Crypto', 'Options', 'Bonds', 'Futures']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
