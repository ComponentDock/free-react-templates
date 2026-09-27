import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the welcome text and social links', () => {
    render(<TopBar />)

    expect(screen.getByText('Welcome to Propvale consulting service')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Email us' })).toHaveAttribute(
      'href',
      'mailto:info@propvale.com',
    )
    expect(screen.getByRole('link', { name: 'Call us' })).toHaveAttribute('href', 'tel:+1234567890')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })
})
