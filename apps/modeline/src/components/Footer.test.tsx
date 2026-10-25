import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { contactDetails } from '../data'

describe('Footer', () => {
  it('carries the wordmark, a faded copyright and the contact list', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('footer')).toHaveAttribute('id', 'contact')
    expect(screen.getByText('Modeline').parentElement).toHaveClass('text-ink')

    const copyright = screen.getByText(/All rights reserved/).closest('p')
    expect(copyright).toHaveClass('text-[12px]', 'text-ink/[0.23]')
    expect(copyright?.textContent).toContain(String(new Date().getFullYear()))

    for (const row of contactDetails) {
      expect(screen.getByText(row.value)).toBeInTheDocument()
    }
    expect(screen.getByText('Address:')).toHaveClass('w-[75px]', 'text-ink')
  })

  it('credits Component Dock instead of any source brand', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
