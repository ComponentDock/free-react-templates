import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the landing page with the Snowdrift heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Snowdrift/)
    expect(screen.getByRole('button', { name: 'Launch Sale' })).toBeInTheDocument()
    expect(screen.getAllByText('Snowdrift').length).toBeGreaterThanOrEqual(1)
  })

  it('opens the sale modal when Launch Sale is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Launch Sale' }))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByText('Winter')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('closes the sale modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Launch Sale' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('has a Component Dock link in the footer', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
