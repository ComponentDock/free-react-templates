import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { COPYRIGHT, FOOTER_LINK_COLUMNS, SOCIAL_LINKS } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the indigo brand mark and three link columns (with the duplicated pair)', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Canvas$/ }).className).toContain('text-brand')

    for (const link of FOOTER_LINK_COLUMNS[0]) {
      expect(screen.getAllByText(link)).toHaveLength(1)
    }
    for (const link of FOOTER_LINK_COLUMNS[1]) {
      expect(screen.getAllByText(link)).toHaveLength(2)
    }
    expect(screen.getByText('hello@mydomain.com')).toBeInTheDocument()
    expect(screen.getByText('+1 829 2293 382')).toBeInTheDocument()
  })

  it('renders five centered social glyphs with labels', () => {
    const { container } = render(<Footer />)
    for (const { label } of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(5)
    const socials = screen.getByRole('link', { name: 'Facebook' })
    expect(socials.className).toContain('m-2')
  })

  it('renders the rebranded copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(COPYRIGHT)).toBeInTheDocument()
  })
})
