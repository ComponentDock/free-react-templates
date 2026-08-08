import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, link columns, contact details and legal links', () => {
    render(<Footer />)

    expect(screen.getByText(/Smart CRM that closes deals/i)).toBeInTheDocument()
    expect(screen.getByText('(555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('sales@dealflow.app')).toBeInTheDocument()

    const columns = screen.getAllByRole('heading', { level: 2 })
    const columnTitles = columns.map((column) => column.textContent)
    expect(columnTitles).toEqual(expect.arrayContaining(['Product', 'Company', 'Support']))

    for (const link of [
      'Pipeline',
      'Contacts',
      'Analytics',
      'Automation',
      'About',
      'Careers',
      'Blog',
      'Press',
      'Help Center',
      'API Docs',
      'Status',
      'Contact',
    ]) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText(/© 2026 Dealflow/i)).toBeInTheDocument()
    for (const legal of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(within(contentinfo).getByRole('link', { name: legal })).toBeInTheDocument()
    }
  })
})
