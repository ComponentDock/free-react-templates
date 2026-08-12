import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows the email, phone and social icon links above the navbar', () => {
    render(<TopBar />)

    const email = screen.getByRole('link', { name: 'info@yourdomain.com' })
    expect(email).toHaveAttribute('href', 'mailto:info@yourdomain.com')

    const phone = screen.getByRole('link', { name: '1+ (234) 5678 9101' })
    expect(phone).toHaveAttribute('href', 'tel:1+(234)56789101')

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
  })
})
