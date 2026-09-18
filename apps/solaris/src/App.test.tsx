import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Solaris navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Solaris').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the intro section', () => {
    render(<App />)
    expect(screen.getByText(/this is a free creative portfolio template/i)).toBeInTheDocument()
  })

  it('renders the portfolio filter', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Post' })).toBeInTheDocument()
  })

  it('renders the portfolio grid', () => {
    render(<App />)
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
  })

  it('renders the text section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /the story/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /dreamers/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
