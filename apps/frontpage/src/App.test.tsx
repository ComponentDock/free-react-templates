import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FrontPage — News & Magazine Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Trending/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Weekly Top News/i }).length,
    ).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /What's New/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Articles/i })).toBeInTheDocument()
  })

  it('renders the top bar with date and social links', () => {
    render(<App />)
    expect(screen.getByText(/September 24, 2026/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Twitter' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Instagram' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Pinterest' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the header middle with logo and ad', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /FrontPage/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('img', { name: 'Advertisement banner' })).toBeInTheDocument()
  })

  it('renders the sticky navbar with navigation links', () => {
    render(<App />)
    for (const label of ['Home', 'Category', 'About', 'Latest News', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
