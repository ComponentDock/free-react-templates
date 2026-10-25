import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CONTACT, FOOTER_COLUMNS } from '../content'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four column headings in the navy footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.id).toBe('contact')
    expect(footer.className).toContain('bg-navy')
    const headings = screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)
    expect(headings).toEqual([...FOOTER_COLUMNS.map((column) => column.heading), CONTACT.heading])
  })

  it('lists every column item and the contact block', () => {
    render(<Footer />)
    for (const column of FOOTER_COLUMNS) {
      for (const item of column.items) {
        expect(screen.getByText(item)).toBeInTheDocument()
      }
    }
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CONTACT.email })).toHaveAttribute(
      'href',
      `mailto:${CONTACT.email}`,
    )
  })

  it('credits Component Dock behind the pink rule with the rendered year', () => {
    render(<Footer />)
    const credits = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(credits.length).toBeGreaterThan(0)
    for (const link of credits) {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    }
    const bar = screen.getByText(new RegExp(`${new Date().getFullYear()} Keynoter`))
    expect(bar.closest('div')?.className).toContain('border-pink')
    expect(screen.getByRole('link', { name: 'Terms and Conditions' })).toBeInTheDocument()
  })
})
