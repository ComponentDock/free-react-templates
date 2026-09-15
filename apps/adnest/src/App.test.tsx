import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('CLASSY').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Largest Classifieds In The World')).toBeInTheDocument()
    expect(screen.getAllByText('Real Estate').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Featured Ads')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Adnest — Classified Ads Directory')
  })
})
