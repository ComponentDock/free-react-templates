import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Chef } from './Chef'

describe('Chef', () => {
  it('renders the chef image and heading', () => {
    render(<Chef />)
    expect(screen.getByRole('img', { name: /master chef at the grill/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(
      screen.getByRole('heading', { name: /Meet the Master Behind the Grill/i }),
    ).toBeInTheDocument()
  })

  it('shows the chef name and title', () => {
    render(<Chef />)
    expect(screen.getByText('Walter White')).toBeInTheDocument()
    expect(screen.getByText('Head Chef & Founder')).toBeInTheDocument()
  })

  it('shows four food thumbnails', () => {
    render(<Chef />)
    const thumbnails = screen
      .getAllByRole('img')
      .filter((img) =>
        img.getAttribute('alt')?.match(/Grilled ribeye|Tender filet|Classic T-bone|Wagyu beef/),
      )
    expect(thumbnails).toHaveLength(4)
  })

  it('shows the signature SVG', () => {
    render(<Chef />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThan(0)
  })
})
