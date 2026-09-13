import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+84 987 654 321')).toBeInTheDocument()
    expect(screen.getByText('support@yourdomain.com')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders user and cart icons', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'User account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shopping cart' })).toBeInTheDocument()
  })

  it('renders language and currency placeholders', () => {
    render(<TopBar />)
    expect(screen.getByText('USD $')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
  })

  it('has correct phone and email links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /support@yourdomain.com/i })).toHaveAttribute(
      'href',
      'mailto:support@yourdomain.com',
    )
    expect(screen.getByRole('link', { name: /\+84 987 654 321/ })).toHaveAttribute(
      'href',
      'tel:+84987654321',
    )
  })
})
