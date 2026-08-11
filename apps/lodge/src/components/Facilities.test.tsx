import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Facilities } from './Facilities'
import { facilities, facilitiesSectionLabel, facilitiesTitle, visitCenterLabel } from '../data'

describe('Facilities', () => {
  it('renders the 72px title and both alternating photo/text blocks', () => {
    const { container } = render(<Facilities />)
    expect(screen.getByRole('region', { name: facilitiesSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(facilitiesTitle)

    for (const facility of facilities) {
      expect(screen.getAllByRole('heading', { name: facility.title }).length).toBeGreaterThan(0)
      expect(screen.getByText(facility.text)).toBeInTheDocument()
      expect(screen.getAllByAltText(facility.title).length).toBeGreaterThan(0)
    }

    // The second block is visually reversed on desktop (photo on the right).
    const images = Array.from(container.querySelectorAll('img')).map((img) => img.className)
    expect(images[0]).not.toContain('order')
    expect(images[1]).toContain('lg:order-2')

    expect(screen.getAllByRole('link', { name: visitCenterLabel })).toHaveLength(2)
    for (const link of screen.getAllByRole('link', { name: visitCenterLabel })) {
      expect(link).toHaveAttribute('href', '#rooms')
    }
  })
})
