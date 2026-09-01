import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal('innerWidth', 1024)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'What Our Clients Say' })).toBeInTheDocument()
  })

  it('renders the testimonial carousel', () => {
    render(<App />)
    expect(screen.getByText('Joshua Jones')).toBeInTheDocument()
    expect(screen.getByTestId('next-button')).toBeInTheDocument()
    expect(screen.getByTestId('prev-button')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
