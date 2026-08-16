import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer, header } from '../data'

describe('Footer', () => {
  it('renders the brand, blurb and four circular social links', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('link', { name: header.brand })).toHaveAttribute('href', '#home')
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()

    const socials = container.querySelectorAll('a[aria-label]')
    expect(socials).toHaveLength(footer.socials.length)
    for (const social of footer.socials) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(footer.socials.length)
  })

  it('renders the three link columns with their headings', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'Book Category' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Site Map' })).toBeInTheDocument()
    // The third column's heading is an empty spacer, hidden from the
    // accessibility tree (aria-hidden) — only two h4 headings are exposed.
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(2)

    for (const column of footer.columns) {
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('renders the copyright bar with the Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText(/© \d{4} Spine/)).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    const bar = dock.closest('div')!
    expect(within(bar).getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
