import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /select languages/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<App />)
    expect(screen.getByText(/choose your preferred programming languages/i)).toBeInTheDocument()
  })

  it('renders the dropdown with placeholder', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })

  it('shows selected count after selection', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /^javascript$/i }))
    expect(screen.getByText('1 selected')).toBeInTheDocument()
  })

  it('does not show count when nothing selected', () => {
    render(<App />)
    expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
  })
})
