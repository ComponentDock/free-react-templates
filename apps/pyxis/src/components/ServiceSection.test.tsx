import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceSection } from './ServiceSection'

describe('ServiceSection', () => {
  it('renders all 6 service items', () => {
    render(<ServiceSection />)
    expect(screen.getByText('Responsive Framework')).toBeInTheDocument()
    expect(screen.getByText('Geniusly Transformable')).toBeInTheDocument()
    expect(screen.getByText('Powerfully Customizable')).toBeInTheDocument()
    expect(screen.getByText('Industrial Support')).toBeInTheDocument()
    expect(screen.getByText('Extensively Extendable')).toBeInTheDocument()
    expect(screen.getByText('Beautifully Presented')).toBeInTheDocument()
  })
})
