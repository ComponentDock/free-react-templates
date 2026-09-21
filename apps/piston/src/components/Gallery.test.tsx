import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { describe, expect, it } from 'vitest'

describe('Gallery', () => {
  it('renders all 4 gallery images', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Gallery image 1')).toBeInTheDocument()
    expect(screen.getByAltText('Gallery image 2')).toBeInTheDocument()
    expect(screen.getByAltText('Gallery image 3')).toBeInTheDocument()
    expect(screen.getByAltText('Gallery image 4')).toBeInTheDocument()
  })
})
