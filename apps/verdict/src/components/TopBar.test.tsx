import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows the phone number, email address and business hours', () => {
    render(<TopBar />)

    expect(screen.getByText('(555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('hello@verdictlaw.com')).toBeInTheDocument()
    expect(screen.getByText('Mon - Fri: 8:00 AM - 6:00 PM')).toBeInTheDocument()
  })
})
