import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders social media links and contact info', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#facebook')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#twitter')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', '#linkedin')

    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@stall.com')).toBeInTheDocument()
  })

  it('links phone and email correctly', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 567 890').closest('a')).toHaveAttribute(
      'href',
      'tel:+1234567890',
    )
    expect(screen.getByText('info@stall.com').closest('a')).toHaveAttribute(
      'href',
      'mailto:info@stall.com',
    )
  })
})
