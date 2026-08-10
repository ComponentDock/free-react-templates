import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { emailAddress, phoneNumber, socialLinks } from '../data'

describe('TopBar', () => {
  it('shows four social icons on the left', () => {
    render(<TopBar />)

    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('shows the phone number and email address on the right', () => {
    render(<TopBar />)

    expect(screen.getByText(phoneNumber)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: emailAddress })).toHaveAttribute(
      'href',
      `mailto:${emailAddress}`,
    )
  })
})
