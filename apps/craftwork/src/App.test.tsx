import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Craft')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Craftwork — UI/UX Designer Portfolio')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/ui\/ux designer & developer/i)).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('What I do')).toBeInTheDocument()
    expect(screen.getAllByText('Experiences').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Featured projects')).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })
})
