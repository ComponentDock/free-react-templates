import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  BRAND,
  COMPONENT_DOCK_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_TITLE,
  FOOTER_COLUMNS,
  SOCIALS,
} from '../lib/site'

describe('Footer', () => {
  it('opens the brand-pink band with the wordmark and its blurb', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('footer')).toHaveClass('bg-brand', 'text-white')
    expect(screen.getByText(BRAND)).toHaveClass('text-black')
  })

  it('carries the social row as labelled brand marks', () => {
    const { container } = render(<Footer />)

    const links = Array.from(container.querySelectorAll('a[aria-label]')).filter((link) =>
      (link.getAttribute('aria-label') ?? '').startsWith(BRAND),
    )

    expect(links).toHaveLength(SOCIALS.length)
    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual(
      SOCIALS.map((social) => social.label),
    )
    expect(links[0] as HTMLElement).toHaveAttribute('href', SOCIALS[0]!.href)
    expect(links[0] as HTMLElement).toHaveClass('rounded-full', 'bg-brand', 'h-[40px]')
    expect((links[0] as HTMLElement).querySelector('svg')).toHaveClass('h-[20px]')
  })

  it('lists the two link columns and the contact column', () => {
    const { container } = render(<Footer />)

    const columns = Array.from(container.querySelectorAll('nav[aria-label]'))

    expect(columns.map((column) => column.getAttribute('aria-label'))).toEqual([
      FOOTER_COLUMNS[0]!.title,
      FOOTER_COLUMNS[1]!.title,
    ])
    expect(columns[0]!.querySelectorAll('a')).toHaveLength(FOOTER_COLUMNS[0]!.items.length)
    expect(columns[0]!.querySelector('h2')).toHaveTextContent('Links')
    expect(columns[0]!.querySelector('h2')).toHaveClass('uppercase', 'text-white', 'text-[20px]')

    expect(screen.getByRole('heading', { level: 2, name: CONTACT_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CONTACT_PHONE })).toHaveAttribute('href', 'tel:+18025550134')
    expect(screen.getByRole('link', { name: CONTACT_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${CONTACT_EMAIL}`,
    )
  })

  it('closes on the copyright line that credits Component Dock', () => {
    const { container } = render(<Footer />)

    const dock = container.querySelectorAll(`a[href="${COMPONENT_DOCK_URL}"]`)

    expect(dock).toHaveLength(1)
    expect(dock[0] as HTMLElement).toHaveTextContent('Component Dock')
    expect(dock[0] as HTMLElement).toHaveAttribute('target', '_blank')
    expect(dock[0] as HTMLElement).toHaveAttribute('rel', 'noreferrer')
    expect(container.textContent).toContain(String(new Date().getFullYear()))
    expect(container.textContent).toContain('More templates at')
  })

  it('keeps every footer link an in-page anchor', () => {
    const { container } = render(<Footer />)

    const anchors = Array.from(container.querySelectorAll('nav[aria-label] a')).map((link) =>
      link.getAttribute('href'),
    )

    expect(anchors).toHaveLength(12)
    for (const href of anchors) {
      expect(href).toMatch(/^#[a-z-]+$/)
    }
  })
})
