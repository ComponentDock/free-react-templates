import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders all four widget columns', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Propel/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('links every footer widget link column entry', () => {
    render(<Footer />)
    for (const link of FOOTER.links) {
      expect(screen.getAllByRole('link', { name: link.label })).toHaveLength(2)
    }
  })

  it('renders contact details and social icons', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.address)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: '+1(123)-456-7890' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: FOOTER.email })).toHaveAttribute(
      'href',
      `mailto:${FOOTER.email}`,
    )

    for (const social of SOCIALS) {
      const link = screen.getByRole('link', { name: social.name })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('credits Component Dock in the bottom bar', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved\. More templates at/)).toBeInTheDocument()
  })
})
