import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Ministry').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Become A Volunteer')).toBeInTheDocument()
    expect(screen.getByText('Transforming Lives')).toBeInTheDocument()
    expect(screen.getByText('Connect, Grow and Serve with Us')).toBeInTheDocument()
    expect(screen.getByText('Our Sermons')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Latest Events')).toBeInTheDocument()
    expect(screen.getByText('Galleries')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('has no colorlib references in source', () => {
    const html = document.documentElement.innerHTML
    expect(html.toLowerCase()).not.toContain('colorlib')
  })
})
