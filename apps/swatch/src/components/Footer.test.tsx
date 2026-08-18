import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { componentDockUrl, footer } from '../data'

describe('Footer', () => {
  it('renders the brand, blurb, services widget and questions widget', () => {
    render(<Footer />)

    const footerEl = screen.getByRole('contentinfo')
    expect(within(footerEl).getByText('Swatch')).toBeInTheDocument()
    expect(within(footerEl).getByText(footer.blurb)).toBeInTheDocument()

    expect(within(footerEl).getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    for (const service of footer.services) {
      expect(within(footerEl).getByText(service)).toBeInTheDocument()
    }

    expect(within(footerEl).getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(within(footerEl).getByText(footer.questions.address)).toBeInTheDocument()
    expect(within(footerEl).getByText(footer.questions.phone)).toBeInTheDocument()
    expect(within(footerEl).getByText(footer.questions.email)).toBeInTheDocument()

    expect(
      within(footerEl).getByRole('heading', { name: "Let's work together" }),
    ).toBeInTheDocument()
    expect(within(footerEl).getByRole('link', { name: 'Start a Project' })).toHaveAttribute(
      'href',
      '#contactme',
    )
  })

  it('shows the copyright bar and the mandatory Component Dock link', () => {
    render(<Footer />)

    const footerEl = screen.getByRole('contentinfo')
    expect(within(footerEl).getByText(footer.copyright)).toBeInTheDocument()

    const dockLink = within(footerEl).getByRole('link', { name: footer.dockLabel })
    expect(dockLink).toHaveAttribute('href', componentDockUrl)
  })

  it('renders the social icon links', () => {
    render(<Footer />)

    const footerEl = screen.getByRole('contentinfo')
    for (const network of ['Facebook', 'Twitter', 'Linkedin']) {
      expect(within(footerEl).getByRole('link', { name: `${network} profile` })).toBeInTheDocument()
    }
  })
})
