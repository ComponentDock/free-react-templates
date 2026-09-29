import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)
    expect(screen.getByText('Brand')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    const { container } = render(<App />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders the search bar', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search Jobs...')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})
