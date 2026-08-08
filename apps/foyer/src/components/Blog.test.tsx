import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading and blog posts', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /Ongoing Exhibitions from the scratch/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Creative Outdoor Ads/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Low Cost Advertising/i })).toBeInTheDocument()
  })
})
