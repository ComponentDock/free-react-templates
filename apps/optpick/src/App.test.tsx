import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('OptPick — Multiselect Dropdown Template')
  })

  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Choose Fruits')
  })

  it('renders the dropdown trigger', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows selected count after selection', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /orange/i }))
    expect(screen.getByText('1 selected')).toBeInTheDocument()
  })

  it('renders the page background with correct color', () => {
    render(<App />)
    const root = screen.getByRole('main').parentElement
    expect(root?.className).toContain('bg-optpick-bg')
  })
})
