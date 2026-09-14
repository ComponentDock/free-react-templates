import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Grain')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('White Sofas')
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByText('About Grain')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Grain — Interior Design Portfolio Template')
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
  })

  it('renders project gallery cards', () => {
    render(<App />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })

  it('renders the footer copyright', () => {
    render(<App />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
