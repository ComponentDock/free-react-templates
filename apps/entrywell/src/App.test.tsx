import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Entrywell')
  })

  it('renders the launch button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(
      screen.getByRole('link', { name: /more templates at component dock/i }),
    ).toBeInTheDocument()
  })

  it('opens modal when launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    await user.click(screen.getByRole('button', { name: /close modal/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal on Escape key', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
