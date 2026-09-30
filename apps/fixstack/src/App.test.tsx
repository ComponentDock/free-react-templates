import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the fixed-column table on the page', () => {
    render(<App />)
    expect(screen.getAllByRole('table')).toHaveLength(2)
    expect(screen.getByRole('columnheader', { name: 'Employees' })).toBeInTheDocument()
  })

  it('renders a full-viewport vertical gradient from purple (top) to pink (bottom)', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild
    expect(shell).toHaveClass('min-h-screen', 'bg-gradient-to-t')
    expect(shell).toHaveClass('from-gradient-bottom', 'to-gradient-top')
  })

  it('centers the table card inside a max-width 1366px container', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toHaveClass('max-w-[1366px]', 'flex', 'items-center', 'justify-center')
  })

  it('renders the white table card on the gradient', () => {
    const { container } = render(<App />)
    const tables = container.querySelectorAll('table')
    const card = tables[0]?.closest('.bg-card')
    expect(card).toBeInTheDocument()
  })

  it('renders the Component Dock footer on the gradient', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fixstack — Fixed Column Table Template')
  })
})
