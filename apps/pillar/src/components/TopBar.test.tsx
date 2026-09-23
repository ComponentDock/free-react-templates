import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the email link', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /info@pillar.com/i })).toHaveAttribute(
      'href',
      'mailto:info@pillar.com',
    )
  })

  it('renders the phone link', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /\+1 234 567 890/i })).toHaveAttribute(
      'href',
      'tel:+1234567890',
    )
  })
})
