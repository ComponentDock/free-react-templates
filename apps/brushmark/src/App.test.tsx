import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Hey There!')).toBeInTheDocument()
    expect(screen.getByText('15k+')).toBeInTheDocument()
    expect(screen.getByText('Creative Art Director And Designer')).toBeInTheDocument()
    expect(screen.getByText('Our Service')).toBeInTheDocument()
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Our blog')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Brushmark — Creative Art Director Portfolio')
  })
})
