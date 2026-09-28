import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the application', () => {
    render(<App />)
    expect(screen.getByText('Polenta')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Polenta — Restaurant Template')
  })

  it('renders the main content area', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Welcome To Polenta Restaurant')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Book Your Table')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })
})
