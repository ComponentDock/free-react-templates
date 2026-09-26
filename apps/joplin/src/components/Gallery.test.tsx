import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the Gallery section', () => {
    render(<Gallery />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('displays the Selected Portfolios heading', () => {
    render(<Gallery />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Selected Portfolios' }),
    ).toBeInTheDocument()
  })

  it('displays at least 4 portfolio images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('images have picsum placeholder sources', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
