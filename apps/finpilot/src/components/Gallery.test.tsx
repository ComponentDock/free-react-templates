import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Gallery from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Recent Works')).toBeInTheDocument()
  })

  it('renders all gallery items', () => {
    render(<Gallery />)
    expect(screen.getByText('Financial Report')).toBeInTheDocument()
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Tax Optimization')).toBeInTheDocument()
    expect(screen.getByText('Market Analysis')).toBeInTheDocument()
    expect(screen.getByText('Risk Management')).toBeInTheDocument()
  })

  it('renders the More Works button', () => {
    render(<Gallery />)
    expect(screen.getByText('More Works')).toBeInTheDocument()
  })

  it('renders gallery images with picsum URLs', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
