import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Lawguard — Legal & Investigation Services')
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByText('Lawguard')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/meet all your investigative/i)).toBeInTheDocument()
    expect(screen.getByText(/jon campbell/i)).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Security Consultants')).toBeInTheDocument()
    expect(screen.getByText('Practice Area')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Write to us')).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
