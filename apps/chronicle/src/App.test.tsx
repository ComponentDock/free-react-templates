import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { siteName } from './data'

afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Chronicle — Blog Template')
  })

  it('composes all sections in landmarks', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /featured posts/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /today's highlight/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'More posts' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Food and Drink' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /open search/i }))
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument()
    await user.type(screen.getByRole('searchbox', { name: /search/i }), 'bread')
    await user.keyboard('{Enter}')
    expect(screen.getByRole('searchbox', { name: /search/i })).toHaveValue('bread')
  })

  it('opens and closes the mobile menu from the burger', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('complementary', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Travel' }).length).toBeGreaterThan(0)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('complementary', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('renders the wordmark in the banner', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: new RegExp(siteName) }).length).toBeGreaterThan(0)
  })
})
