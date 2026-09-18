import { render, screen } from '@testing-library/react'
import { Properties } from './Properties'
import { describe, expect, it } from 'vitest'

describe('Properties', () => {
  it('renders the section heading', () => {
    render(<Properties />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Properties')
  })

  it('renders eight property cards', () => {
    render(<Properties />)
    const prices = screen.getAllByText(/^\$[\d,]+$/)
    expect(prices).toHaveLength(8)
  })

  it('renders property addresses', () => {
    render(<Properties />)
    expect(screen.getByText('46 Brookflower Rd, Houston TX')).toBeInTheDocument()
    expect(screen.getByText('3300 Smith St, Houston TX')).toBeInTheDocument()
  })

  it('renders property images with alt text', () => {
    render(<Properties />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
    expect(images[0]).toHaveAttribute('alt', '46 Brookflower Rd, Houston TX')
  })
})
