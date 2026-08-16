import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows the call-for-free-estimate line with a phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(/Call for Free Estimate/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '700-567-8990' })).toHaveAttribute(
      'href',
      'tel:+17005678990',
    )
  })

  it('shows the opening hours', () => {
    render(<TopBar />)
    expect(screen.getByText(/Opening Hour: Monday – Friday : 8am – 4pm/)).toBeInTheDocument()
  })

  it('shows three social icon links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('links the social icons to the page top', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#home')
  })
})
