import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClientsLogos } from './ClientsLogos'

describe('ClientsLogos', () => {
  it('renders six partner logos', () => {
    const { container } = render(<ClientsLogos />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6)
  })

  it('has correct alt text for each logo', () => {
    render(<ClientsLogos />)
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByAltText(`Partner ${i}`)).toBeInTheDocument()
    }
  })

  it('logs are grayscale and opacity-40', () => {
    const { container } = render(<ClientsLogos />)
    const images = container.querySelectorAll('img')
    for (const img of images) {
      expect(img.className).toContain('grayscale')
      expect(img.className).toContain('opacity-40')
    }
  })
})
