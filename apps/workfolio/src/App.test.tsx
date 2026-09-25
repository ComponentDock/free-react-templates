import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Workfolio — Portfolio Resume Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Workfolio')).toBeInTheDocument()
    expect(screen.getByText('Digital product designer')).toBeInTheDocument()
    expect(screen.getByText('about me')).toBeInTheDocument()
    expect(screen.getByText('My portfolio')).toBeInTheDocument()
    expect(screen.getByText('My services')).toBeInTheDocument()
    expect(screen.getByText('Word from my clients')).toBeInTheDocument()
    expect(screen.getByText('Discuss your project now')).toBeInTheDocument()
  })

  it('renders the Component Dock link in the footer', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
