import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Sagewell')).toBeInTheDocument()
    expect(screen.getByText(/Boost up your skills/)).toBeInTheDocument()
    expect(screen.getByText('Popular Programs')).toBeInTheDocument()
    expect(screen.getByText('Recent Events')).toBeInTheDocument()
    expect(screen.getByText('Apply for Admission')).toBeInTheDocument()
    expect(screen.getByText('Recent News')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sagewell — Education Template')
  })
})
