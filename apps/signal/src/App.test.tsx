import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-06-15T12:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Signal — Coming Soon Template')
  })

  it('renders the "Comming Soon" heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Comming Soon')
  })

  it('renders a maintenance message', () => {
    render(<App />)

    expect(screen.getByText(/undergoing scheduled maintenance/i)).toBeInTheDocument()
  })

  it('renders the email signup form', () => {
    render(<App />)

    expect(screen.getByRole('form', { name: /email signup/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notify us/i })).toBeInTheDocument()
  })

  it('renders the countdown timer', () => {
    render(<App />)

    expect(screen.getByRole('timer', { name: /countdown timer/i })).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<App />)

    expect(screen.getByText(/follow us for update/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const link = within(footer).getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
