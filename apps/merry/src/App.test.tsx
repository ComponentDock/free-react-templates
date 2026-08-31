import { describe, it, expect, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  afterEach(() => {
    document.title = ''
    document.documentElement.classList.remove('dark')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Merry — Interactive Carousel Template')
  })

  it('renders the navbar with brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Merry').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the carousel section', () => {
    render(<App />)
    expect(screen.getByText('Featured Carousel')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getByText('Multi-Item Display')).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<App />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    const cdLink = links.find(
      (l) =>
        l.getAttribute('href') === 'https://www.componentdock.com/' &&
        l.getAttribute('target') === '_blank',
    )
    expect(cdLink).toBeDefined()
  })

  it('renders the nav links in the navbar', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    const homeLink = screen.getAllByRole('link', { name: 'Home' }).find((l) => nav.contains(l))
    expect(homeLink).toBeDefined()
    expect(homeLink).toHaveAttribute('href', '#home')
  })
})
