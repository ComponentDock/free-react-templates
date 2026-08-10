import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { siteName } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Marlowe — Blog Template')
  })

  it('composes all sections in landmarks', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /hot posts/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /Recent Posts/i })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /Instagram/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /open search/i }))
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(screen.queryByRole('searchbox', { name: /search/i })).not.toBeInTheDocument()
  })

  it('renders the wordmark in the banner', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: new RegExp(siteName) }).length).toBeGreaterThan(0)
  })
})
