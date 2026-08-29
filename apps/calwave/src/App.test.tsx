import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the Calwave heading in the navbar', () => {
    render(<App />)
    expect(screen.getByText('Calwave')).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Calendar & Schedule Dashboard',
    )
  })

  it('renders the calendar dashboard with Year/Month/Day panels', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const texts = headings.map((h) => h.textContent)
    expect(texts).toContain('Year')
    expect(texts).toContain('Month')
    expect(texts).toContain('Day')
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getByText('Powerful Features')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })

  it('toggles dark mode class on html element', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggleBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    const lightToggle = screen.getByRole('button', { name: /switch to light mode/i })
    await user.click(lightToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('renders navigation links in the navbar', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Calendar' })).toHaveAttribute('href', '#calendar')
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#features')
  })
})
