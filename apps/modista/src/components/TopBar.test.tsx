import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+84 987 654 321')).toBeInTheDocument()
    expect(screen.getByText('support@yourdomain.com')).toBeInTheDocument()
  })

  it('links the phone number and email', () => {
    render(<TopBar />)
    const phoneLink = screen.getByRole('link', { name: '+84 987 654 321' })
    expect(phoneLink).toHaveAttribute('href', 'tel:+84987654321')
    const emailLink = screen.getByRole('link', { name: 'support@yourdomain.com' })
    expect(emailLink).toHaveAttribute('href', 'mailto:support@yourdomain.com')
  })

  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Youtube' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('renders user account and cart icons', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'User account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shopping cart' })).toBeInTheDocument()
  })

  it('renders language and currency selects', () => {
    render(<TopBar />)
    expect(screen.getByRole('combobox', { name: 'Select language' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Select currency' })).toBeInTheDocument()
  })
})
