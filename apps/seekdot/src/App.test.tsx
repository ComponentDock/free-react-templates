import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the SeekDot heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'SeekDot' })).toBeInTheDocument()
  })

  it('renders a search form', () => {
    render(<App />)
    expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
  })

  it('renders a search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('SeekDot — Search Form')
  })

  it('applies the correct background class to the root container', () => {
    const { container } = render(<App />)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('bg-seekdot-bg')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/SeekDot\. All rights reserved/)).toBeInTheDocument()
  })
})
