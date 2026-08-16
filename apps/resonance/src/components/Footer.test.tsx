import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerInfo } from '../data'

describe('Footer', () => {
  it('renders the about column with brand blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: footerInfo.aboutHeading })).toBeInTheDocument()
    expect(screen.getByText(footerInfo.aboutText)).toBeInTheDocument()
    for (const social of ['Twitter', 'Instagram', 'Facebook']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the Pages and Resources link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Pages' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()

    for (const link of [...footerInfo.pages, ...footerInfo.resources]) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
  })

  it('renders the contact column with email, phone, and address', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: footerInfo.contactHeading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footerInfo.email })).toHaveAttribute(
      'href',
      `mailto:${footerInfo.email}`,
    )
    expect(screen.getByRole('link', { name: footerInfo.phone })).toHaveAttribute(
      'href',
      'tel:+12222123819',
    )
    expect(screen.getByText(footerInfo.address)).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })
})
