import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page shell with heading and table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #9' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders a white page shell with Roboto light typography', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild
    expect(shell).toHaveClass('bg-page', 'font-sans', 'font-light')
  })

  it('renders the heading at 20px medium weight dark ink with 3rem margin', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Table #9' })
    expect(heading).toHaveClass('text-xl', 'font-medium', 'text-heading', 'mb-12')
  })

  it('renders the demo rows with crew avatars', () => {
    const { container } = render(<App />)
    expect(screen.getAllByText('Sales Pitch - 2019').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Social Media Planner').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Website Agreement').length).toBeGreaterThan(0)
    // Avatars are decorative (empty alt) — query the DOM, not the a11y tree.
    expect(container.querySelectorAll('img').length).toBeGreaterThan(0)
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cellcrew — Data Table Template')
  })
})
