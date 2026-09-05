import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Checkbox #13')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Coralbit — Circular Checkbox Template')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Coralbit')).toBeInTheDocument()
  })

  it('renders all four checkboxes', () => {
    render(<App />)
    expect(screen.getByText('First checkbox')).toBeInTheDocument()
    expect(screen.getByText('Second checkbox')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
    expect(screen.getByText('Disabled & checked')).toBeInTheDocument()
  })
})
