import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone and email contacts and the social links', () => {
    render(<TopBar />)

    expect(screen.getByText('Phone:')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 292 3293 4238' })).toHaveAttribute(
      'href',
      'tel:+129232934238',
    )
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )

    for (const social of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })
})
