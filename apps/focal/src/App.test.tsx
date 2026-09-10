import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Focal')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Focal — Photography Portfolio Template')
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByLabelText('Hero carousel')).toBeInTheDocument()
    expect(screen.getByLabelText('Work gallery')).toBeInTheDocument()
    expect(screen.getByLabelText('About us')).toBeInTheDocument()
    expect(screen.getByLabelText('Contact us')).toBeInTheDocument()
  })
})
