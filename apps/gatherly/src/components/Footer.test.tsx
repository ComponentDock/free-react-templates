import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brand, footer } from '../data'
import { socialLinks } from './social-icons'

describe('Footer', () => {
  it('renders the dark footer with brand, links, questions and socials', () => {
    render(<Footer />)
    const footerElement = screen.getByTestId('footer')
    expect(footerElement.className).toContain('bg-footer')

    expect(screen.getByRole('link', { name: `${brand.name}.` })).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()

    const linksNav = screen.getByRole('navigation', { name: footer.linksTitle })
    for (const link of footer.links) {
      expect(within(linksNav).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }

    expect(screen.getByRole('heading', { name: footer.questionTitle })).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    expect(screen.getByText(footer.phone)).toBeInTheDocument()
    expect(screen.getByText(footer.email)).toBeInTheDocument()

    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('credits Component Dock with a link to the marketplace', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
