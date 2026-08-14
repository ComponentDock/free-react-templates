import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerLinks, footerServices, questionsContact } from '../data'

describe('Footer', () => {
  it('renders the four columns with about blurb and social buttons', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument()
    for (const name of ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: 'Links' })).toBeInTheDocument()
    for (const label of footerLinks) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    for (const label of footerServices) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(questionsContact.address)).toBeInTheDocument()
    expect(screen.getByText(questionsContact.phone)).toBeInTheDocument()
    expect(screen.getByText(questionsContact.email)).toBeInTheDocument()
  })

  it('shows the copyright bar with the Component Dock credit link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
