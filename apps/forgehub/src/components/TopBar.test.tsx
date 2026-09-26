import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 5678 9101')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<TopBar />)
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<TopBar />)
    const socialLinks = screen.getAllByRole('link', {
      name: /facebook|twitter|instagram|linkedin/i,
    })
    expect(socialLinks.length).toBe(4)
  })
})
