import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText('Derrick').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Bringing to life most complex projects')).toBeInTheDocument()
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('Construction Management')).toBeInTheDocument()
    expect(screen.getAllByText('Pricing').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('opens quote modal when Request a Quote is clicked in CTA', async () => {
    const user = userEvent.setup()
    render(<App />)
    const ctaButton = screen.getAllByText('Request a Quote').at(1)
    expect(ctaButton).toBeDefined()
    await user.click(ctaButton!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes quote modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const ctaButton = screen.getAllByText('Request a Quote').at(1)
    expect(ctaButton).toBeDefined()
    await user.click(ctaButton!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
