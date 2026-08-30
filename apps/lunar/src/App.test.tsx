import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { vi } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date(2026, 7, 15))
  })

  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pick a Date')
  })

  it('renders the calendar widget', () => {
    render(<App />)
    expect(screen.getByText('August 2026')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has the correct page background', () => {
    render(<App />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('bg-[#efefef]')
  })
})
