import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('KeyForge')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('KeyForge — Locksmith Services Template')
  })

  it('renders the hero label', () => {
    render(<App />)
    expect(screen.getByText('BEST LOCKSMITH')).toBeInTheDocument()
  })

  it('renders the quote form', () => {
    render(<App />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Services We Offer')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
