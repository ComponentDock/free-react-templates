import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cura — Healthcare Center')
  })

  it('renders the skip link as the first focusable element', () => {
    render(<App />)
    const skipLink = screen.getByRole('link', { name: 'Skip to content' })
    expect(skipLink).toHaveAttribute('href', '#main')
    expect(skipLink).toHaveClass('sr-only')
  })

  it('composes every section in the expected order', () => {
    render(<App />)
    expect(screen.getByText('Emergency: (555) 911-0000')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Your Health Is Our Top Priority/,
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Medical Services' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Doctors' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Book Your Appointment' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24/7 Emergency Care' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Patients Say' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We Work With Your Insurance' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Cura' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Cura. All rights reserved.')).toBeInTheDocument()
  })

  it('renders the cookie banner and back-to-top button', () => {
    render(<App />)
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })
})
