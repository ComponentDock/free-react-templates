import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('vest').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vestly — Cryptocurrency Landing Page')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A new World is coming')
    // Intro
    expect(screen.getByText('Buy and Sell Bitcoin')).toBeInTheDocument()
    // Services
    expect(screen.getByText('Exchange Fiat for Crypto')).toBeInTheDocument()
    // Converter
    expect(screen.getByText('Bitcoin To Fiat Currency Calculator')).toBeInTheDocument()
    // Info
    expect(screen.getByText('A simple trading system')).toBeInTheDocument()
    // News
    expect(screen.getByText('Latest News in Crypto')).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })
})
