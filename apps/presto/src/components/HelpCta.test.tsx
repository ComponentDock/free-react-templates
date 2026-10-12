import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HelpCta } from './HelpCta'

describe('HelpCta', () => {
  it('renders the heading and copy on the soft surface band', () => {
    render(<HelpCta />)
    const section = screen.getByRole('region', { name: 'Need help' })
    expect(section).toHaveClass('bg-surface-soft')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Need a hand getting started?' }),
    ).toHaveClass('font-bold', 'text-ink')
    expect(screen.getByText(/we will size the plan with you/)).toBeInTheDocument()
  })

  it('pairs a filled Contact Us CTA with an outline Live Chat CTA', () => {
    render(<HelpCta />)
    const filled = screen.getByRole('link', { name: 'Contact Us' })
    expect(filled).toHaveAttribute('href', '#contact')
    expect(filled).toHaveClass('rounded-full', 'sm:mr-5')

    const outline = screen.getByRole('link', { name: 'Live Chat' })
    expect(outline).toHaveAttribute('href', '#faq')
    expect(outline).toHaveClass('border-coral', 'text-coral')
  })
})
