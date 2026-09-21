import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('Joystick').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Joystick — Gaming Magazine Template')
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('The Power of Gaming')).toBeDefined()
  })

  it('renders games section', () => {
    render(<App />)
    expect(screen.getAllByText('View Games')).toHaveLength(3)
  })

  it('renders monthly picks section', () => {
    render(<App />)
    expect(screen.getByText("This Month's Pick")).toBeDefined()
  })

  it('renders video reviews section', () => {
    render(<App />)
    expect(screen.getByLabelText('Video Reviews')).toBeDefined()
  })

  it('renders latest articles section', () => {
    render(<App />)
    expect(screen.getByText('Latest Articles')).toBeDefined()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeDefined()
  })
})
