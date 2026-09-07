import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the sign-up heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Sign Up Office Employee Account',
    )
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Dispel — Sign Up Form')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders step tiles', () => {
    render(<App />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
  })

  it('renders Next button on step 1', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('does not render Previous button on step 1', () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
  })

  it('shows step 1 legend', () => {
    render(<App />)
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
    expect(screen.getByText('Step 1 / 4')).toBeInTheDocument()
  })

  it('renders the coral page background', () => {
    const { container } = render(<App />)
    const page = container.querySelector('.bg-page')
    expect(page).toBeInTheDocument()
  })
})
