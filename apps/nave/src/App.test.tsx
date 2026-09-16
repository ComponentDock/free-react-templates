import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getAllByText('Arise, Shine').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Worship Time')).toBeInTheDocument()
    expect(screen.getByText('Listen Our Sermons')).toBeInTheDocument()
    expect(screen.getByText('Events & Ministries')).toBeInTheDocument()
    expect(screen.getByText('About The Nave')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Nave — Church Ministry Template')
  })
})
