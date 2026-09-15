import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six gallery items', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('shows subtitles for each gallery item', () => {
    render(<Gallery />)
    expect(screen.getByText('Modern Living Room')).toBeInTheDocument()
    expect(screen.getByText('Kitchen Design')).toBeInTheDocument()
    expect(screen.getByText('Bedroom Suite')).toBeInTheDocument()
  })
})
