import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page shell with heading and table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #10' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders a white page shell with Roboto at body weight 400 (cells drop to 300)', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild
    expect(shell).toHaveClass('bg-surface', 'font-sans')
    expect(shell?.className).not.toMatch(/font-light/)
  })

  it('renders the heading at 20px medium weight dark ink with 3rem margin', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Table #10' })
    expect(heading).toHaveClass('text-xl', 'font-medium', 'text-ink', 'mb-12')
  })

  it('renders the demo rows with the source struck arrangement', () => {
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
    expect(document.title).toBe('Cellmate — Data Table Template')
  })
})
