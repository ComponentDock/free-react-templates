import { render, screen } from '@testing-library/react'
import { BRAND, COMPONENT_DOCK_LABEL, COMPONENT_DOCK_URL, FOOTER_NAV, SOCIALS } from '../lib/site'
import { Footer } from './Footer'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the foot of the page', () => {
  it('carries the wordmark, the menu and the social row', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('link', { name: `${BRAND} — back to the top` })).toHaveAttribute(
      'href',
      '#home',
    )
    expect(tokens(screen.getByRole('contentinfo'))).toContain('bg-soft')

    for (const item of FOOTER_NAV) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }

    for (const social of SOCIALS) {
      const link = screen.getByRole('link', { name: social.label })

      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }

    expect(container.querySelectorAll('li')).toHaveLength(FOOTER_NAV.length + SOCIALS.length)
  })

  it('dates the credit line and points back to Component Dock', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(dock).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(dock).toHaveAttribute('target', '_blank')
    expect(dock).toHaveAttribute('rel', 'noreferrer')
    expect(dock).toHaveTextContent(COMPONENT_DOCK_LABEL)
    expect(screen.getByText(String(new Date().getFullYear()), { exact: false })).toBeInTheDocument()
  })
})
