import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand widget with social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /slugger/i })).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Youtube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the link widgets and contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Company' })).toBeInTheDocument()

    const services = screen.getByRole('navigation', { name: 'Services' })
    for (const link of ['Senior Team', 'For Kids', 'Reviews', 'FAQs']) {
      expect(within(services).getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
    expect(screen.getByText(/203 fake st\./i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toHaveAttribute(
      'href',
      'tel:+23923929210',
    )
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
  })

  it('links Component Dock in the copyright row', () => {
    const { container } = render(<Footer />)
    const year = new Date().getFullYear()
    const bottom = container.querySelector('footer > div:last-child')
    expect(bottom?.textContent).toMatch(new RegExp(`copyright © ${year}`, 'i'))
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
