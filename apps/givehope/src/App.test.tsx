import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    const giveHopeLinks = screen.getAllByRole('link', { name: 'GiveHope' })
    expect(giveHopeLinks.length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', { name: /bless others with your gift/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'How Could You Help' })).toBeInTheDocument()
    expect(screen.getByText('Featured Causes')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert Volunteers' })).toBeInTheDocument()
    expect(screen.getByText('Every Single Update')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('GiveHope — Charity & Nonprofit Template')
  })
})
