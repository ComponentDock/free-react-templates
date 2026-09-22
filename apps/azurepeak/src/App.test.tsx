import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

afterEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    const logoLinks = screen.getAllByRole('link', { name: 'AzurePeak' })
    expect(logoLinks.length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', { level: 1, name: /Experience Luxury/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Years of Excellence/)).toBeInTheDocument()
  })

  it('toggles dark mode via the navbar button', async () => {
    const user = userEvent.setup()
    render(<App />)
    const darkBtns = screen.getAllByRole('button', { name: 'Switch to dark mode' })
    expect(darkBtns.length).toBeGreaterThanOrEqual(1)
    await user.click(darkBtns[0]!)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('persists dark mode preference in localStorage', async () => {
    const user = userEvent.setup()
    render(<App />)
    const darkBtns = screen.getAllByRole('button', { name: 'Switch to dark mode' })
    await user.click(darkBtns[0]!)
    expect(localStorage.getItem('azurepeak-dark')).toBe('true')
    const lightBtns = screen.getAllByRole('button', { name: 'Switch to light mode' })
    await user.click(lightBtns[0]!)
    expect(localStorage.getItem('azurepeak-dark')).toBe('false')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('AzurePeak — Luxury Hotel & Resort')
  })
})
