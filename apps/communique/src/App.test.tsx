import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the landing page with Communique heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Communique' })).toBeInTheDocument()
  })

  it('renders the Launch Modal button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('opens the modal when Launch Modal is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Free Consultation' })).toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders the navbar with dark mode toggle', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })
})
