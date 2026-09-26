import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow me on Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders sidebar with profile', () => {
    render(<App />)
    expect(screen.getByAltText('Photosnap profile')).toBeInTheDocument()
  })

  it('renders hero content', () => {
    render(<App />)
    expect(screen.getByText("Hello! I'm")).toBeInTheDocument()
    expect(screen.getByText(/A Photographer\. I Capture Life/)).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Photosnap — Photographer Portfolio')
  })
})
