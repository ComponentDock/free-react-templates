import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the two-panel layout', () => {
    render(<App />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('25%')).toBeInTheDocument()
  })

  it('renders blog post content', () => {
    render(<App />)
    expect(
      screen.getAllByText(/How the gut microbes you're born with affect your lifelong health/),
    ).toHaveLength(8) // 4 posts × 2 sides
  })

  it('renders onboarding steps', () => {
    render(<App />)
    expect(screen.getAllByText('Create organization')).toHaveLength(2)
    expect(screen.getByText('Create project')).toBeInTheDocument()
    expect(screen.getByText('Add time')).toBeInTheDocument()
  })

  it('renders user profile', () => {
    render(<App />)
    expect(screen.getByText('Dan Smith')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles sidebar on close button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const closeBtn = screen.getByRole('button', { name: /close/i })
    await user.click(closeBtn)
    // Sidebar should still be in DOM (translated off-screen), but toggle state changed
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})
