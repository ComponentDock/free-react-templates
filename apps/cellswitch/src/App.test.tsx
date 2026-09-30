import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page shell with heading and table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #7' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders a white page shell with Roboto light typography', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild
    expect(shell).toHaveClass('bg-surface', 'font-sans', 'font-light')
  })

  it('renders the heading at 20px medium weight dark ink with 3rem margin', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Table #7' })
    expect(heading).toHaveClass('text-xl', 'font-medium', 'text-ink', 'mb-12')
  })

  it('renders the demo rows with switch states', () => {
    render(<App />)
    expect(screen.getByText('James Yates')).toBeInTheDocument()
    expect(screen.getAllByText('Matthew Wasil').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Sampson Murphy').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Gaspar Semenov').length).toBeGreaterThan(0)
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cellswitch — Data Table Template')
  })
})
