import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the FindBar heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'FindBar' })).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('FindBar — Smart Search')
  })

  it('applies the correct background class to the root container', () => {
    const { container } = render(<App />)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('bg-findbar-bg')
  })

  it('uses Poppins font family', () => {
    const { container } = render(<App />)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('font-sans')
  })
})
