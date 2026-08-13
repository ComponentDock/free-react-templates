import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the full page with landmarks and a document title', () => {
    render(<App />)

    expect(document.title).toBe('Kickoff — Sports Club Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section headings in order.
    expect(
      screen.getByRole('heading', { level: 1, name: 'How long can you last?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Great Win In Final Game' })).toBeInTheDocument()
    expect(screen.getByText('Game Schedule')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Senior Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Team Squad' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About the Kickoff Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Viewers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent News' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Subcribe to our upcoming match' }),
    ).toBeInTheDocument()

    // Footer attribution link (mandatory Component Dock).
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
