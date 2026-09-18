import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureDestinations } from './FeatureDestinations'

describe('FeatureDestinations', () => {
  it('renders 3 destination cards', () => {
    render(<FeatureDestinations />)

    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Kyoto, Japan')).toBeInTheDocument()
  })

  it('renders Visit This Place links', () => {
    render(<FeatureDestinations />)

    const links = screen.getAllByText('Visit This Place')
    expect(links).toHaveLength(3)
  })

  it('renders cards as links', () => {
    render(<FeatureDestinations />)

    const links = screen.getAllByRole('link')
    const destinationLinks = links.filter(
      (l) =>
        l.textContent?.includes('Santorini') ||
        l.textContent?.includes('Bali') ||
        l.textContent?.includes('Kyoto'),
    )
    expect(destinationLinks).toHaveLength(3)
  })
})
