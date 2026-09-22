import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })

  it('has correct alt text for images', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Strength Zone')).toBeInTheDocument()
    expect(screen.getByAltText('Cardio Studio')).toBeInTheDocument()
    expect(screen.getByAltText('Free Weights')).toBeInTheDocument()
    expect(screen.getByAltText('Group Classes')).toBeInTheDocument()
    expect(screen.getByAltText('Recovery Area')).toBeInTheDocument()
  })
})
