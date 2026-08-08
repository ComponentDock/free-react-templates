import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark, quick links, and department links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Medora' })).toHaveAttribute('href', '#home')

    const quickLinks = screen.getByRole('navigation', { name: 'Quick links' })
    for (const label of ['Home', 'About', 'Departments', 'Doctors', 'Appointment']) {
      expect(within(quickLinks).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const departments = screen.getByRole('navigation', { name: 'Departments' })
    for (const label of ['Cardiology', 'Pediatrics', 'Orthopedics', 'Neurology']) {
      expect(within(departments).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders contact details and social links', () => {
    render(<Footer />)
    expect(screen.getByText('123 Wellness Avenue, Medical District')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 (555) 019-9005' })).toHaveAttribute(
      'href',
      'tel:+15550199005',
    )
    expect(screen.getByRole('link', { name: 'hello@medora.clinic' })).toHaveAttribute(
      'href',
      'mailto:hello@medora.clinic',
    )
    for (const label of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright line and the ColorLib credit', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Medora. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByText('recreation of ColorLib Medical Wordpress Themes')).toBeInTheDocument()
  })
})
