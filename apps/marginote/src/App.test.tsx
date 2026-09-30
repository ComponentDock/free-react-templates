import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Marginote — Sidebar Blog Template')
  })

  it('renders the sidebar with brand name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Journal')
  })

  it('renders the blog grid', () => {
    render(<App />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBeGreaterThan(0)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('toggles sidebar visibility when toggle button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Sidebar starts open
    const aside = screen.getByRole('complementary')
    expect(aside).toHaveClass('translate-x-0')

    // Click toggle to close
    const toggle = screen.getByRole('button', { name: /close sidebar/i })
    await user.click(toggle)
    expect(aside).toHaveClass('-translate-x-full')

    // Click toggle to open again
    const openToggle = screen.getByRole('button', { name: /open sidebar/i })
    await user.click(openToggle)
    expect(aside).toHaveClass('translate-x-0')
  })
})
