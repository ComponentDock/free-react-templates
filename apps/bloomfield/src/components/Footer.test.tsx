import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Bloomfield' })).toHaveAttribute('href', '#home')
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/The floristry business has a significant market/)).toBeInTheDocument()
  })

  it('renders all social links with external targets', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the ComponentDock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
