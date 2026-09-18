import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByText('GiveMore').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Bless others with your gift')).toBeInTheDocument()
    expect(screen.getByText('How Could You Help')).toBeInTheDocument()
    expect(screen.getByText('Featured Causes')).toBeInTheDocument()
    expect(screen.getByText('Expert Volunteers')).toBeInTheDocument()
    expect(screen.getByText('Every Single Update')).toBeInTheDocument()
    expect(screen.getByText('Worldwide Partners')).toBeInTheDocument()
    expect(screen.getByText('More templates at')).toBeInTheDocument()
  })

  it('sets the page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('GiveMore — Charity Template')
  })
})
