import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+12312-3-1209')).toBeInTheDocument()
    expect(screen.getByText('support@shopcraft.com')).toBeInTheDocument()
  })

  it('links phone and email correctly', () => {
    render(<TopBar />)
    expect(screen.getByText('+12312-3-1209').closest('a')).toHaveAttribute(
      'href',
      'tel:+12312-3-1209',
    )
    expect(screen.getByText('support@shopcraft.com').closest('a')).toHaveAttribute(
      'href',
      'mailto:support@shopcraft.com',
    )
  })

  it('renders login link', () => {
    render(<TopBar />)
    expect(screen.getByText('Login')).toHaveAttribute('href', '#login')
  })
})
