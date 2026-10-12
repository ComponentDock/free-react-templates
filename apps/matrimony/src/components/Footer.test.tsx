import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  FOOTER_COLUMNS,
  SOCIALS,
  VENUE_ADDRESS,
} from '../lib/site'

describe('Footer', () => {
  it('sets the near-black band with the wordmark and the two link columns', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('footer')).toHaveClass('damask-dark', 'text-footer-link')
    expect(screen.getByText(BRAND)).toHaveClass('text-white', 'font-display')

    for (const column of FOOTER_COLUMNS) {
      const nav = screen.getByRole('navigation', { name: column.title })

      expect(within(nav).getByRole('heading', { level: 2 })).toHaveTextContent(column.title)
      expect(within(nav).getAllByRole('link')).toHaveLength(column.items.length)
      expect(within(nav).getAllByRole('link')[0]).toHaveClass('text-footer-link')
    }
  })

  it('prints the location column as a dialable address', () => {
    render(<Footer />)

    expect(screen.getByText(VENUE_ADDRESS)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+44 20 7946 0123' })).toHaveAttribute(
      'href',
      'tel:+442079460123',
    )
  })

  it('carries the social row, each mark drawn inline', () => {
    const { container } = render(<Footer />)

    const links = screen.getAllByRole('link', { name: /^Matrimony on/ })

    expect(links).toHaveLength(SOCIALS.length)

    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    }

    expect(container.querySelectorAll('footer svg')).toHaveLength(SOCIALS.length + 1)
  })

  it('credits Component Dock under the hairline with the current year', () => {
    const { container } = render(<Footer />)

    const hairline = container.querySelector('footer > div > div:last-child') as HTMLElement

    expect(hairline).toHaveClass('border-t', 'border-footer-line', 'pt-[33px]')

    const copy = hairline.querySelector('p') as HTMLElement

    expect(copy).toHaveTextContent(String(new Date().getFullYear()))
    expect(copy).toHaveClass('text-center', 'text-footer-link')

    const credit = within(copy).getByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(credit).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(credit).toHaveClass('text-heart')
    expect(hairline.querySelector('svg')).toHaveClass('text-heart')
  })

  it('sends every external link to the same house', () => {
    render(<Footer />)

    const external = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href') ?? '')
      .filter((href) => href.startsWith('http'))

    expect(external.length).toBeGreaterThan(0)

    for (const href of external) {
      expect(href).toBe(COMPONENT_DOCK_URL)
    }
  })
})
