import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Love To Build')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Forgeit').length).toBeGreaterThan(0)
    expect(screen.getByText('Our Works')).toBeInTheDocument()
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Forgeit — Creative Agency Template')
  })
})
