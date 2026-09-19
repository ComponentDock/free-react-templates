import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCollection } from './FeaturedCollection'

describe('FeaturedCollection', () => {
  it('renders the section heading', () => {
    render(<FeaturedCollection />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Featured Collection' }),
    ).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<FeaturedCollection />)
    expect(screen.getByText(/Our most popular styles handpicked for you/)).toBeInTheDocument()
  })

  it('renders all four product cards', () => {
    render(<FeaturedCollection />)
    expect(screen.getByText('Air Max Pulse')).toBeInTheDocument()
    expect(screen.getByText('Classic Runner Pro')).toBeInTheDocument()
    expect(screen.getByText('Court Dominator')).toBeInTheDocument()
    expect(screen.getByText('Trail Blazer X')).toBeInTheDocument()
  })

  it('displays badges for BESTSELLER and NEW products', () => {
    render(<FeaturedCollection />)
    expect(screen.getAllByText('BESTSELLER').length).toBe(2)
    expect(screen.getByText('NEW')).toBeInTheDocument()
  })

  it('displays product images with alt text', () => {
    render(<FeaturedCollection />)
    expect(screen.getByAltText('Air Max Pulse')).toBeInTheDocument()
    expect(screen.getByAltText('Classic Runner Pro')).toBeInTheDocument()
    expect(screen.getByAltText('Court Dominator')).toBeInTheDocument()
    expect(screen.getByAltText('Trail Blazer X')).toBeInTheDocument()
  })
})
