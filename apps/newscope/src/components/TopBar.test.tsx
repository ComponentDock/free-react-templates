import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders location, weather, and utility links', () => {
    render(<TopBar />)
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText(/HI: 75/)).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
    expect(screen.getByText('Log in')).toBeInTheDocument()
  })

  it('has working links', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    const aboutLink = screen.getByText('About')
    expect(aboutLink.tagName).toBe('A')
    await user.click(aboutLink)
  })
})
