import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MapSection } from './MapSection'

describe('MapSection', () => {
  it('renders the map container', () => {
    render(<MapSection />)
    expect(screen.getByLabelText(/map showing company location/i)).toBeInTheDocument()
  })

  it('displays the company label', () => {
    render(<MapSection />)
    expect(screen.getByText('My Co.')).toBeInTheDocument()
  })
})
