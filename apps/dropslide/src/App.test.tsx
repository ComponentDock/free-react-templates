import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page with heading and footer', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown #1')
    expect(screen.getByText('Dropslide')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Dropslide — Custom Dropdown')
  })

  it('links footer to componentdock.com', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
