import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Wristly — Smartwatch Landing')
  })

  it('renders the navbar with Wristly brand', () => {
    render(<App />)
    expect(screen.getByText('Wristly')).toBeInTheDocument()
  })

  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByText(/Feel the Future/)).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders the footer Component Dock link', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    const cdLink = links.find((l) => l.getAttribute('href') === 'https://www.componentdock.com/')
    expect(cdLink).toBeDefined()
  })
})
