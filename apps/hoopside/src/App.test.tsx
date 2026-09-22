import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('National Leagues 2025 Season Begins')).toBeInTheDocument()
    expect(screen.getByText('Latest Results')).toBeInTheDocument()
    expect(screen.getByText('First Team')).toBeInTheDocument()
    expect(screen.getByText('Player Statistics')).toBeInTheDocument()
    expect(screen.getByText('Latest Videos')).toBeInTheDocument()
    expect(screen.getByText('Basketball Store')).toBeInTheDocument()
    expect(screen.getByText('Join Our Fan Club and Get Free Tickets')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Hoopside — Basketball Sports Landing')
  })
})
