import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sideline — Sports Club Template')
  })

  it('renders every major section of the template', () => {
    render(<App />)
    // Header + hero
    expect(screen.getAllByRole('link', { name: /Sideline/i }).length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { level: 1, name: /Continental Cup Championship/ }),
    ).toBeInTheDocument()
    // Matches section (countdown + tabs + promo)
    expect(screen.getByText('Next match')).toBeInTheDocument()
    expect(screen.getByText('Latest Matches')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Harbor Hawks vs Founders FC/ })).toBeInTheDocument()
    // Highlights + news + footer
    expect(
      screen.getByRole('heading', { level: 2, name: 'More Game Highlights' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
