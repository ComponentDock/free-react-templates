import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
    expect(screen.getByTestId('promo-section')).toBeInTheDocument()
    expect(screen.getByTestId('podcast-section')).toBeInTheDocument()
    expect(screen.getByTestId('charts-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fmbeat — DJ & Radio Station')
  })

  it('renders Fmbeat branding in navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Fmbeat').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Component Dock in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('toggles dark mode on the html element', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<App />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    const darkButtons = screen.getAllByRole('button', { name: /toggle dark mode/i })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(darkButtons[0]!)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(darkButtons[0]!)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
