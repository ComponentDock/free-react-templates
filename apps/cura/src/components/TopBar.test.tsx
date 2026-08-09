import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone number and opening hours on the left', () => {
    render(<TopBar />)
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri: 8:00 AM - 6:00 PM')).toBeInTheDocument()
  })

  it('renders the emergency hotline on the right', () => {
    render(<TopBar />)
    expect(screen.getByText('Emergency: (555) 911-0000')).toBeInTheDocument()
  })

  it('links the phone numbers with tel: hrefs', () => {
    render(<TopBar />)
    expect(screen.getByText('(555) 123-4567').closest('a')).toHaveAttribute(
      'href',
      'tel:+15551234567',
    )
    expect(screen.getByText('Emergency: (555) 911-0000').closest('a')).toHaveAttribute(
      'href',
      'tel:+15559110000',
    )
  })
})
