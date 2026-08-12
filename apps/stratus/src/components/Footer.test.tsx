import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the two-tone dark footer with brand, about, and socials', () => {
    const { container } = render(<Footer />)
    const top = container.querySelector('section')
    expect(top?.className).toContain('bg-darktop')
    expect(screen.getByRole('link', { name: /Stratus/ })).toBeInTheDocument()
    expect(screen.getByText(/Sed ultrices interdum libero/)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the four link columns with their headings', () => {
    const { container } = render(<Footer />)
    const headings = screen.getAllByRole('heading', { level: 5 })
    expect(headings.map((node) => node.textContent)).toEqual([
      'Our Products',
      'Our Solutions',
      'Our Products',
      'Company',
    ])
    /* 8 + 8 + 3 + 2 links across the four columns (the bottom-bar nav is a
       separate list outside the section). */
    const listItems = container.querySelectorAll('section ul li')
    expect(listItems).toHaveLength(21)
    expect(screen.getAllByRole('link', { name: 'Web Hosting' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Dedicated Servers' })).toHaveLength(4)
  })

  it('renders the darkest bottom bar with copyright and footer nav', () => {
    const { container } = render(<Footer />)
    const bar = [...container.querySelectorAll('div')].find((node) =>
      node.className.includes('bg-darkbar'),
    )
    expect(bar).toBeInTheDocument()
    expect(within(bar!).getByText(/Copyright ©/)).toBeInTheDocument()
    for (const label of ['Home', 'About us', 'Services', 'News', 'Contact']) {
      expect(within(bar!).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
