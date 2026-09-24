import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('NewsClip — News & Magazine')
  })

  it('composes header, hero, ticker, main content, categories, videos, editorial and footer', () => {
    render(<App />)
    // Header
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByText('Breaking').length).toBeGreaterThan(0)
    // Logo
    expect(screen.getByRole('link', { name: 'NewsClip' })).toBeInTheDocument()
    // Hero
    expect(screen.getAllByText('Politics').length).toBeGreaterThan(0)
    // Main content
    expect(screen.getByText("Today's Most Popular")).toBeInTheDocument()
    expect(screen.getByText('Breaking News')).toBeInTheDocument()
    expect(screen.getByText(/Don't Miss/)).toBeInTheDocument()
    expect(screen.getAllByText('Subscribe').length).toBeGreaterThanOrEqual(2)
    // Category posts
    expect(screen.getByText('Video Posts')).toBeInTheDocument()
    // Editorial
    expect(screen.getAllByText(/Editor's Pick/).length).toBeGreaterThanOrEqual(1)
    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
