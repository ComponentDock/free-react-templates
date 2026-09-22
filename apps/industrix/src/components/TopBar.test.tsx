import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@industrix.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders office hours', () => {
    render(<TopBar />)
    expect(screen.getByText(/Mon - Fri: 9:00 - 19:00/)).toBeInTheDocument()
  })

  it('has correct link targets', () => {
    render(<TopBar />)
    const phoneLink = screen.getByText('+1 234 567 890').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890')
    const emailLink = screen.getByText('info@industrix.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@industrix.com')
  })
})
