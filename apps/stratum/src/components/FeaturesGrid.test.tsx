import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturesGrid } from './FeaturesGrid'

describe('FeaturesGrid', () => {
  it('renders all 6 feature cards', () => {
    render(<FeaturesGrid />)
    expect(screen.getByText('Surface Mining')).toBeInTheDocument()
    expect(screen.getByText('Gold Nuggets')).toBeInTheDocument()
    expect(screen.getByText('Soil Carrier')).toBeInTheDocument()
    expect(screen.getByText('Gold Refinery')).toBeInTheDocument()
    expect(screen.getByText('Anvil Blacksmith')).toBeInTheDocument()
    expect(screen.getByText('Gold Melt Crucible')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<FeaturesGrid />)
    expect(screen.getByText(/Advanced open-pit/)).toBeInTheDocument()
    expect(screen.getByText(/Expert gold prospecting/)).toBeInTheDocument()
  })
})
