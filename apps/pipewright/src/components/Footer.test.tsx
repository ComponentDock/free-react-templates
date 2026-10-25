import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  ADDRESS,
  BRAND,
  BRAND_NOTE,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  LICENCE_BODY,
  PHONE_HREF,
} from '../content'

describe('Footer', () => {
  it('draws the light wordmark and the blurb over a dark ground', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer') as HTMLElement
    expect(footer).toHaveClass('bg-gray-900', 'pt-16', 'text-gray-300', 'lg:pt-24')
    expect(screen.getByText(BRAND)).toHaveClass('font-serif', 'text-white')
    expect(screen.getByText(BRAND_NOTE)).toHaveClass('text-gray-400', 'tracking-[0.18em]')
    expect(screen.getByText(FOOTER.blurb)).toHaveClass('text-gray-400')
  })

  it('gives the three social tiles labels and real targets', () => {
    render(<Footer />)
    for (const social of FOOTER.socials) {
      const tile = screen.getByRole('link', { name: social.label })
      expect(tile).toHaveAttribute('href', social.href)
      expect(tile.getAttribute('href')).not.toBe('#')
      expect(tile).toHaveClass('h-10', 'w-10', 'bg-gray-800')
    }
  })

  it('lists the address, a valid tel: and a mailto:', () => {
    render(<Footer />)
    expect(screen.getByText(ADDRESS).parentElement).toHaveClass('text-sm', 'text-gray-400')
    expect(screen.getAllByRole('link', { name: '(555) 010-0142' })[0]).toHaveAttribute(
      'href',
      PHONE_HREF,
    )
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  it('renders three link columns as h3 heads inside one grid cell', () => {
    const { container } = render(<Footer />)
    const heads = container.querySelectorAll('h3')
    expect(heads).toHaveLength(3)
    expect(Array.from(heads).map((head) => head.textContent)).toEqual(
      FOOTER.columns.map((column) => column.heading),
    )
    for (const head of Array.from(heads)) {
      expect(head).toHaveClass('text-sm', 'font-semibold', 'uppercase', 'text-white')
    }
  })

  it('closes with the licence column, the legal bar and the Component Dock line', () => {
    render(<Footer />)
    expect(screen.getByText(LICENCE_BODY)).toHaveClass('text-sm', 'text-gray-400')
    expect(screen.getByRole('link', { name: 'Ring Sam' })).toHaveAttribute('href', '#contact')
    expect(screen.getByText(FOOTER.legal).parentElement).toHaveClass('text-gray-500')

    const dock = screen.getByRole('link', { name: FOOTER.componentDock })
    expect(dock).toHaveAttribute('href', COMPONENTDOCK_HREF)
  })
})
