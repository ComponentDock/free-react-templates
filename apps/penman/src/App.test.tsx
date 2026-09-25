import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Penman')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Penman — Author & Book Landing Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/best seller book of the week/i)).toBeInTheDocument()
    expect(screen.getByText('About The Book')).toBeInTheDocument()
    expect(screen.getByText("What's Inside The Book")).toBeInTheDocument()
    expect(screen.getByText('Kinds Words From Customers')).toBeInTheDocument()
    expect(screen.getByText('My Other Books')).toBeInTheDocument()
    expect(screen.getAllByText('Franklin Henderson').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })
})
