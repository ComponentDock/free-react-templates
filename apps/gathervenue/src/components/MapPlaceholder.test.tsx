import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapPlaceholder } from './MapPlaceholder'

describe('MapPlaceholder', () => {
  it('renders map area', () => {
    render(<MapPlaceholder />)
    expect(screen.getByText(/map area/i)).toBeInTheDocument()
  })
})
