import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /find your inner chi/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Yoga' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Hatha' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pilates' })).toBeInTheDocument()
    expect(screen.getAllByText(/meditation sessions/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/working hours/i)).toBeInTheDocument()
    expect(screen.getByText(/maria smith/i)).toBeInTheDocument()
    expect(screen.getByText(/123 serenity lane/i)).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Zen — Yoga & Meditation Template')
  })

  it('has mobile menu toggle that closes on link click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile nav link to close the menu
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const homeLink = within(mobileNav).getByRole('link', { name: 'Home' })
    await user.click(homeLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
