import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FooterLume — Footer Template')
  })

  it('renders the heading in the main content area', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Footer #17')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('uses white background for the page', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    const main = heading.closest('main')
    expect(main).not.toBeNull()
    const outerDiv = main!.parentElement
    expect(outerDiv).not.toBeNull()
    expect(outerDiv!.className).toContain('bg-white')
  })
})
