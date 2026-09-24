import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the BytePress header', () => {
    render(<App />)
    expect(screen.getAllByText(/Byte/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Press/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Building the Future')
  })

  it('renders the Featured Posts section', () => {
    render(<App />)
    expect(screen.getByText('Featured Posts')).toBeInTheDocument()
  })

  it('renders the Technology section', () => {
    render(<App />)
    expect(screen.getByText('Technology')).toBeInTheDocument()
  })

  it('renders the From the World section', () => {
    render(<App />)
    expect(screen.getByText('From the World')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('BytePress — Tech Magazine Template')
  })
})
