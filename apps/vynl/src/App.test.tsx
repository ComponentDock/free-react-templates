import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    document.documentElement.classList.remove('dark')
  })

  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('featured-events')).toBeInTheDocument()
    expect(screen.getByTestId('upcoming-events')).toBeInTheDocument()
    expect(screen.getByTestId('video-about')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vynl — DJ Music Website')
  })

  it('renders Vynl branding', () => {
    render(<App />)
    expect(screen.getByText('Vynl')).toBeInTheDocument()
  })

  it('renders Component Dock in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('toggles dark mode on the html element', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(screen.getByRole('button', { name: /toggle dark mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(screen.getByRole('button', { name: /toggle dark mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
