import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows the contact phone and email on the left', () => {
    render(<TopBar />)
    expect(screen.getByText('+880 1234 654 953')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'support@uplink.example' })).toHaveAttribute(
      'href',
      'mailto:support@uplink.example',
    )
  })

  it('shows a Purchase Hosting button linking to the pricing section', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /purchase hosting/i })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })
})
