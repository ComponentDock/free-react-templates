import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the contact strip with the app own phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: '+1 (555) 014-2290' })).toHaveAttribute(
      'href',
      'tel:+15550142290',
    )
    expect(screen.getByRole('link', { name: 'support@harbor.example' })).toHaveAttribute(
      'href',
      'mailto:support@harbor.example',
    )
  })

  it('renders the live chat and login links on the right', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Live chat' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Login / Register' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
