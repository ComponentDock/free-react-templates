import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER_NAV_LINKS, INSTAGRAM_SEEDS, USEFUL_LINKS } from '../data'

describe('Footer', () => {
  it('renders the footer landmark with the brand blurb', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(container.querySelector('footer img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/bistro-bg-footer/1920/700',
    )
    expect(screen.getByText(/cozy neighborhood kitchen/)).toBeInTheDocument()
  })

  it('renders the Navigation column', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    for (const label of FOOTER_NAV_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Useful Links column', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    for (const label of USEFUL_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Instagram thumbnail grid with six seeded images', () => {
    const { container } = render(<Footer />)

    const thumbnails = container.querySelectorAll('img')
    // 6 Instagram thumbs + the 1 backdrop photo.
    expect(thumbnails).toHaveLength(7)
    INSTAGRAM_SEEDS.forEach((seed, index) => {
      expect(thumbnails[index + 1]).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${seed}/150/150`,
      )
    })
  })

  it('renders the social icon links with inline SVG brand glyphs', () => {
    const { container } = render(<Footer />)

    for (const label of ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']) {
      const link = screen.getByRole('link', { name: label })
      expect(link.querySelector('svg path')).not.toBeNull()
    }
    expect(container.querySelectorAll('a[aria-label] svg')).toHaveLength(4)
  })

  it('renders the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Bistro/)).toBeInTheDocument()
  })
})
