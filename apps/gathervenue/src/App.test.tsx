import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(/gathering of innovation/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about event/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /event gallery/i })).toBeInTheDocument()
    expect(screen.getByText(/watch this video/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /event schedule/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our speakers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our sponsors/i })).toBeInTheDocument()
    expect(screen.getByText(/get ticket now/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact info/i })).toBeInTheDocument()
    expect(screen.getByText(/map area/i)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('GatherVenue — Event Landing Page Template')
  })
})
