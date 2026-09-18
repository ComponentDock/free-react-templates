import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the full page', () => {
    render(<App />)
    expect(screen.getByText('pixel precise')).toBeInTheDocument()
    expect(screen.getByText('to suit all your needs.')).toBeInTheDocument()
  })

  it('renders portfolio items', () => {
    render(<App />)
    expect(screen.getByText('Photoshop PSD Notebook MockUp')).toBeInTheDocument()
    const mockups = screen.getAllByText('Mockup')
    expect(mockups.length).toBeGreaterThanOrEqual(1)
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('has a menu open button', () => {
    render(<App />)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('opens hamburger menu on click', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText('Open menu'))
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
    // "About" appears in both menu and footer — use getAllByText
    const abouts = screen.getAllByText('About')
    expect(abouts.length).toBeGreaterThanOrEqual(2)
  })

  it('closes hamburger menu on close button click', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText('Open menu'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders categories in footer', () => {
    render(<App />)
    const brandings = screen.getAllByText('Branding')
    expect(brandings.length).toBeGreaterThanOrEqual(1)
    const vectors = screen.getAllByText('Vectors')
    expect(vectors.length).toBeGreaterThanOrEqual(1)
  })

  it('renders load more button', () => {
    render(<App />)
    expect(screen.getByLabelText('Load more')).toBeInTheDocument()
  })
})
