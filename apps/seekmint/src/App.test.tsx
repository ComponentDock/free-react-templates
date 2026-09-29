import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Seekmint')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Seekmint — Search Form')
  })

  it('renders the search bar', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/Seekmint\. All rights reserved/)).toBeInTheDocument()
  })

  it('renders a link to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
