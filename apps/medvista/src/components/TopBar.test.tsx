import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone and email contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (234) 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@medvista.com')).toBeInTheDocument()
  })

  it('renders Sign Up and Sign In links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /Sign Up/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign In/i })).toBeInTheDocument()
  })

  it('links to phone and email', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /\+1 \(234\) 567 890/i })).toHaveAttribute(
      'href',
      'tel:+1234567890',
    )
    expect(screen.getByRole('link', { name: /info@medvista.com/i })).toHaveAttribute(
      'href',
      'mailto:info@medvista.com',
    )
  })
})
