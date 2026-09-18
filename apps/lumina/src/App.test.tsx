import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Lumina')).toBeInTheDocument()
    expect(screen.getByText(/No Need to Find/)).toBeInTheDocument()
    expect(screen.getByText('Glorious History')).toBeInTheDocument()
    expect(screen.getByText('Some Projects')).toBeInTheDocument()
    expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
    expect(screen.getByText(/Together/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lumina — Professional Agency Template')
  })

  it('contains the hero CTA button', () => {
    render(<App />)
    expect(screen.getAllByText('Get Started').length).toBeGreaterThanOrEqual(1)
  })
})
