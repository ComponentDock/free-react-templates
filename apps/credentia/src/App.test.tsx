import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Credentia')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Maria Williams')).toBeInTheDocument()
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('References')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Extra Skills')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Credentia — CV Resume Template')
  })
})
