import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer, siteName } from '../data'

describe('Footer', () => {
  it('shows the about column, three link columns and the contact column', () => {
    render(<Footer />)

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(within(contentinfo).getByText(footer.blurb)).toBeInTheDocument()

    for (const label of ['Instagram', 'Facebook', 'Twitter']) {
      expect(within(contentinfo).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(
      within(contentinfo).getByRole('heading', { name: footer.navigationTitle }),
    ).toBeInTheDocument()
    for (const label of footer.navigationLinks) {
      expect(
        within(contentinfo).getAllByRole('link', { name: label }).length,
      ).toBeGreaterThanOrEqual(1)
    }

    expect(
      within(contentinfo).getByRole('heading', { name: footer.servicesTitle }),
    ).toBeInTheDocument()
    expect(
      within(contentinfo).getByRole('heading', { name: footer.supportTitle }),
    ).toBeInTheDocument()
    for (const label of footer.linkColumns) {
      // Services + Support columns both list the same four items.
      expect(within(contentinfo).getAllByRole('link', { name: label })).toHaveLength(2)
    }

    expect(
      within(contentinfo).getByRole('heading', { name: footer.contactTitle }),
    ).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: footer.email })).toHaveAttribute(
      'href',
      `mailto:${footer.email}`,
    )
    expect(within(contentinfo).getByRole('link', { name: footer.phone })).toHaveAttribute(
      'href',
      `tel:${footer.phone.replace(/[^\d+]/g, '')}`,
    )
  })

  it('credits Component Dock with a link in the copyright bar', () => {
    render(<Footer />)

    const bar = screen.getByText(/Copyright © \d{4}/)
    expect(bar).toHaveTextContent(footer.rights)
    expect(bar).toHaveTextContent(footer.madeWith)

    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', footer.componentDockHref)
  })
})
