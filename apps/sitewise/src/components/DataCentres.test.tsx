import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataCentres } from './DataCentres'

describe('DataCentres', () => {
  it('renders the heading, a map graphic, and four location cards', () => {
    render(<DataCentres />)

    expect(screen.getByRole('heading', { level: 2, name: /Our Data Centres/ })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Stylized world map showing Sitewise data centre regions/ }),
    ).toBeInTheDocument()

    for (const [city, country] of [
      ['Sydney', 'Australia'],
      ['London', 'United Kingdom'],
      ['Frankfurt', 'Germany'],
      ['Singapore', 'Singapore'],
    ]) {
      expect(
        screen.getByRole('heading', { level: 3, name: `${city}, ${country}` }),
      ).toBeInTheDocument()
    }
  })
})
