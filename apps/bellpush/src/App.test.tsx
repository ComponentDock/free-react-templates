import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Bellpush heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Bellpush')
  })

  it('renders the launch button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Bellpush — Newsletter Modal Template')
  })

  it('opens the modal when launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog', { name: /newsletter modal/i })).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog', { name: /newsletter modal/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog', { name: /newsletter modal/i })).not.toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', {
      name: /more templates at component dock/i,
    })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
