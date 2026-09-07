import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Select Options')
  })

  it('shows placeholder initially', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('shows selected count after selection', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: 'Red' }))
    expect(screen.getByText('1 selected')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('OptSelect — Multiselect Dropdown Template')
  })

  it('renders footer', () => {
    render(<App />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })
})
