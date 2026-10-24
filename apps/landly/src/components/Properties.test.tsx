import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Properties } from './Properties'
import {
  properties,
  propertiesHeading,
  propertiesSubtext,
  propertyAddress,
} from '../data'

describe('Properties', () => {
  it('renders the centred white heading and subtext on the black band', () => {
    const { container } = render(<Properties />)
    expect(screen.getByRole('heading', { level: 2, name: propertiesHeading })).toBeInTheDocument()
    expect(screen.getByText(propertiesSubtext)).toBeInTheDocument()
    expect(container.querySelector('section')).toHaveClass('bg-black')
  })

  it('renders the three listings twice, mirroring the reference carousel loop', () => {
    render(<Properties />)
    expect(screen.getAllByTestId('property-card')).toHaveLength(properties.length * 2)

    for (const property of properties) {
      expect(screen.getAllByRole('link', { name: property.price })).toHaveLength(2)
      expect(screen.getAllByText('2911 Sq Ft.')).toHaveLength(properties.length * 2)
      expect(screen.getAllByText(propertyAddress)).toHaveLength(properties.length * 2)
    }
  })

  it('shows the reference spec row and image alt text on every card', () => {
    render(<Properties />)
    expect(screen.getAllByText('2.')).toHaveLength(properties.length * 2)
    expect(screen.getAllByText('2')).toHaveLength(properties.length * 2)
    expect(screen.getAllByAltText('Listing at $570,000')).toHaveLength(2)
  })
})
