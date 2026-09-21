import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Choose } from './Choose'

describe('Choose', () => {
  it('renders the section heading', () => {
    render(<Choose />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Why People Choose Us/i }),
    ).toBeInTheDocument()
  })

  it('renders all six feature cards', () => {
    render(<Choose />)
    const titles = [
      'Quick & Easy',
      'Absolute Security',
      'Quick Approval',
      'Low Interest Rates',
      'Customer Support',
      'Transparent Process',
    ]
    titles.forEach((title) => {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    })
  })

  it('renders descriptions for all features', () => {
    render(<Choose />)
    expect(screen.getByText(/Fast application process/i)).toBeInTheDocument()
    expect(screen.getByText(/bank-level security/i)).toBeInTheDocument()
    expect(screen.getByText(/approved within hours/i)).toBeInTheDocument()
    expect(screen.getByText(/Competitive interest rates/i)).toBeInTheDocument()
    expect(screen.getByText(/Dedicated support team/i)).toBeInTheDocument()
    expect(screen.getByText(/No hidden fees/i)).toBeInTheDocument()
  })

  it('renders six icons', () => {
    render(<Choose />)
    const icons = document.querySelectorAll('svg[aria-hidden="true"]')
    expect(icons.length).toBeGreaterThanOrEqual(6)
  })
})
