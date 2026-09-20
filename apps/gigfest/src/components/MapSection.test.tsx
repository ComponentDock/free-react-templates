import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapSection } from './MapSection'

describe('MapSection', () => {
  it('renders an iframe with the venue map', () => {
    render(<MapSection />)
    const iframe = screen.getByTitle('Event venue map')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', expect.stringContaining('google.com/maps'))
  })
})
