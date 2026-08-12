import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders on black with the Follow Us column', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-black')
    expect(within(footer).getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Pinterest']) {
      const link = within(footer).getByRole('link', { name: label })
      expect(link).toHaveClass('hover:text-accent')
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('renders the Links column with Services, Work, About', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    for (const link of ['Services', 'Work', 'About']) {
      expect(within(footer).getByRole('link', { name: link })).toHaveAttribute(
        'href',
        `#${link.toLowerCase()}`,
      )
    }
  })

  it('renders the Address column with address, email, and phone', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Address' })).toBeInTheDocument()
    expect(within(footer).getByText('300, A-block, Green lane, USA')).toBeInTheDocument()
    expect(within(footer).getByText('support@creative.com')).toBeInTheDocument()
    expect(within(footer).getByText('+10 672 367 3789')).toBeInTheDocument()
  })

  it('renders the copyright bar with a Component Dock link', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/All rights reserved/i)).toBeInTheDocument()
    const dock = within(footer).getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
