import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByText('Dropdown #6')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Droptile — Mega Menu Dropdown')
  })

  it('renders the MegaDropdown component', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Dropdown/i })).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(<App />)
    expect(screen.getByText('Droptile')).toBeInTheDocument()
    expect(screen.getByText('Mega Menu Dropdown')).toBeInTheDocument()
  })
})
