import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByText('Cogwork')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('We Are Industrial Company')).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getByText('Automotive Parts')).toBeInTheDocument()
  })

  it('renders the engineering section', () => {
    render(<App />)
    expect(screen.getByText('We Are Reliable Engineering In House')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getAllByText('Create, Enhance and Sustain').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the projects section', () => {
    render(<App />)
    expect(screen.getByText('Our Latest Projects')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByText('Blog Posts')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
