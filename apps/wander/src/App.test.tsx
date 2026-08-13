import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Travel & Tours' })).toBeInTheDocument()
    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(headings).toEqual([
      'Welcome To Our Website',
      'Experience Once In Your Life Time',
      'International Tour Management.',
      'Recent Blog Post',
      '45 Best Places To Unwind',
      'A Weekend In The Greek Isles',
      'Top Mountain Trails To Trek',
      'Happy Customers',
      'Top Destination',
    ])
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const dockLinks = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(dockLinks.length).toBeGreaterThanOrEqual(1)
    expect(dockLinks.map((link) => link.getAttribute('href'))).toContain(
      'https://www.componentdock.com/',
    )
    expect(screen.getByText('3,239 reviews')).toBeInTheDocument()
  })
})
