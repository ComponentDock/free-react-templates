import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, link columns, and contact details', () => {
    render(<Footer />)
    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText('Peony')).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: /information/i })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      within(contentinfo).getByRole('heading', { name: /have a questions/i }),
    ).toBeInTheDocument()
    for (const item of ['FAQs', 'Privacy', 'Terms Condition']) {
      expect(within(contentinfo).getByText(item)).toBeInTheDocument()
    }
    for (const link of ['Home', 'About', 'Services', 'Work', 'Blog', 'Contact']) {
      expect(within(contentinfo).getByText(link)).toBeInTheDocument()
    }
    expect(within(contentinfo).getByText(/203 Fake St\. Mountain View/i)).toBeInTheDocument()
    expect(within(contentinfo).getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(within(contentinfo).getByText('info@yourdomain.com')).toBeInTheDocument()
  })
})
