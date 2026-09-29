import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JourneyBar — Travel Search Form')
  })

  it('renders the heading and search bar', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Find Your Perfect Journey/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /hotels/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /car/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /flight/i })).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
