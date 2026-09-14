import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the main heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'I am an experienced photographer',
    )
  })

  it('renders the subtitle', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent("Let's talk")
  })

  it('renders a contact button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument()
  })

  it('renders the decorative background text', () => {
    render(<CTA />)
    expect(screen.getByText('Dream')).toBeInTheDocument()
  })

  it('contact button links to contact section', () => {
    render(<CTA />)
    const btn = screen.getByRole('link', { name: /contact me/i })
    expect(btn).toHaveAttribute('href', '#contact')
  })
})
