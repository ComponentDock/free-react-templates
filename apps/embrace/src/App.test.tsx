import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Embrace')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText('Donate').length).toBeGreaterThan(0)
    expect(screen.getByText('Most Popular Causes')).toBeInTheDocument()
    expect(screen.getByText('Latest Donations')).toBeInTheDocument()
    expect(screen.getByText('What People Say')).toBeInTheDocument()
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'News' })).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Embrace — Charity & Donation Template')
  })
})
