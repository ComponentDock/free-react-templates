import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByText('Kaleido UI Kit')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Kaleido — UI Kit Template')
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggle)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
  })
})
