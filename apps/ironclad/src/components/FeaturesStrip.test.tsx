import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesStrip } from './FeaturesStrip'

describe('FeaturesStrip', () => {
  it('renders 3 feature items', () => {
    render(<FeaturesStrip />)
    expect(screen.getByText('Quality Construction')).toBeInTheDocument()
    expect(screen.getByText('Professional Liability')).toBeInTheDocument()
    expect(screen.getByText('Dedicated To Our Clients')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<FeaturesStrip />)
    const descriptions = screen.getAllByText(/a small river named Duden/i)
    expect(descriptions.length).toBe(3)
  })
})
