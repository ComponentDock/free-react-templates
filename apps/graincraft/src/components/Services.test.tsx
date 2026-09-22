import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByText('Design Solutions')).toBeInTheDocument()
    expect(screen.getByText('Exterior Design')).toBeInTheDocument()
    expect(screen.getByText('Moldings & Trim')).toBeInTheDocument()
    expect(screen.getByText('Office Furniture')).toBeInTheDocument()
  })

  it('renders service card images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
