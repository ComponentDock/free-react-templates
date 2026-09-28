import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BannerBottom } from './BannerBottom'

describe('BannerBottom', () => {
  it('renders the headline, video play button and explore menu link', () => {
    render(<BannerBottom />)
    expect(
      screen.getByRole('heading', { name: /Premium cuts, expertly crafted/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Menu/i })).toBeInTheDocument()
  })

  it('shows the supporting text', () => {
    render(<BannerBottom />)
    expect(screen.getByText(/Watch our story of passion and quality/i)).toBeInTheDocument()
  })
})
