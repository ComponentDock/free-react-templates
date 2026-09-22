import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Photos } from './Photos'

describe('Photos', () => {
  it('renders the Photos heading', () => {
    render(<Photos />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Photos')
  })

  it('renders 6 gallery images', () => {
    render(<Photos />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('has correct alt text for images', () => {
    render(<Photos />)

    expect(screen.getByAltText('Hotel photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel photo 6')).toBeInTheDocument()
  })
})
