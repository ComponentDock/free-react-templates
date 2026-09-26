import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Lenscraft')).toBeInTheDocument()
    expect(screen.getByText(/Images/)).toBeInTheDocument()
    expect(screen.getByText(/Introduce About Myself/)).toBeInTheDocument()
    expect(screen.getByText(/What We Offer/)).toBeInTheDocument()
    expect(screen.getByText(/Check Our Work/)).toBeInTheDocument()
    expect(screen.getByText(/Choose Your Package/)).toBeInTheDocument()
    expect(screen.getByText(/Latest Good Story/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lenscraft — Photography Portfolio')
  })
})
