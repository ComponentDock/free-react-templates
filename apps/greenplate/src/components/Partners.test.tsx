import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner placeholder images', () => {
    render(<Partners />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })

  it('renders partner images with correct alt text', () => {
    render(<Partners />)
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByAltText(`Partner ${i}`)).toBeInTheDocument()
    }
  })
})
