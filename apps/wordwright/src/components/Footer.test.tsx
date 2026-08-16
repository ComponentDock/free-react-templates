import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { brand, footer } from '../data'

describe('Footer', () => {
  it('renders the headline, social circles, CTA, nav row and Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: footer.headline })).toBeInTheDocument()

    for (const social of footer.socials) {
      const label = { facebook: 'Facebook', linkedin: 'LinkedIn', instagram: 'Instagram' }[social]
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', footer.componentDockHref)
      expect(link.className).toContain('bg-ink')
    }

    expect(screen.getByRole('link', { name: footer.ctaLabel }).className).toContain('bg-accent')

    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    for (const link of footer.links) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }

    const year = new Date().getFullYear()
    const credit = screen.getByText(new RegExp(`Copyright © ${year} ${brand}`))
    expect(credit).toHaveTextContent(footer.copyright)
    expect(credit).toHaveTextContent(footer.madeWith)

    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', footer.componentDockHref)
    expect(dock.className).toContain('text-accent')
  })
})
