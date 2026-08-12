import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCards } from './ServiceCards'
import { SERVICES } from '../data'

describe('ServiceCards', () => {
  it('renders the three service cards with photos and orange titles', () => {
    render(<ServiceCards />)

    expect(screen.getByRole('heading', { level: 3, name: 'Sea Freight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Air Freight' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Package Forwarding' }),
    ).toBeInTheDocument()

    for (const service of SERVICES) {
      expect(screen.getByAltText(service.title)).toHaveAttribute('src', service.image)
    }
    /* The source demo repeats the same lorem blurb in every card. */
    expect(screen.getAllByText(SERVICES[0]!.text)).toHaveLength(SERVICES.length)
  })
})
