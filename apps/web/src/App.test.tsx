import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the headline and template cards', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/production-ready\s*React templates/i)
    expect(screen.getByText('SaaS Landing')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Pro')).toBeInTheDocument()
    expect(screen.getByText('Business Plus')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /View template/i })).toHaveLength(3)
  })

  it('toggles dark mode on and off', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Dark mode' })

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('cleans up the document class on unmount', () => {
    const { unmount } = render(<App />)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
