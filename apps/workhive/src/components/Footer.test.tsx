import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Workhive')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    for (const label of ['Home', 'Spaces', 'About', 'Blog', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders subscribe form', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('prevents default on form submit', () => {
    render(<Footer />)
    const form = screen.getByRole('textbox', { name: /email address/i }).closest('form')!
    const event = fireEvent.submit(form)
    expect(event).toBe(false)
  })
})
