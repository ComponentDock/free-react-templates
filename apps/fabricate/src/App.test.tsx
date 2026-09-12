import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page', () => {
    render(<App />)
    expect(screen.getByText('Fabricate')).toBeInTheDocument()
  })

  it('composes every section', () => {
    render(<App />)
    expect(screen.getByText("We're Industrial Solution")).toBeInTheDocument()
    expect(screen.getByText('Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Request a Quote')).toBeInTheDocument()
    expect(screen.getByText('Our Capturing Market Sectors')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Latest Finished Projects')).toBeInTheDocument()
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Latest Posts from Our Blog')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
