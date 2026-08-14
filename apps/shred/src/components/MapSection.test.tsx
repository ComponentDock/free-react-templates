import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapSection } from './MapSection'

describe('MapSection', () => {
  it('renders the full-width map placeholder', () => {
    render(<MapSection />)

    const section = screen.getByRole('region', { name: 'Map' })
    expect(section).toHaveClass('bg-white')
    expect(section.querySelector('svg')).not.toBeNull()
  })

  it('mentions the club location on the placeholder', () => {
    render(<MapSection />)

    expect(screen.getByText(/Shred Fitness Club/)).toBeInTheDocument()
  })
})
