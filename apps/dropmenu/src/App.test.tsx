import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByText('Dropdown #8')).toBeInTheDocument()
  })

  it('renders the profile dropdown trigger', () => {
    render(<App />)
    expect(screen.getByText('Kevin Thomas')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Dropmenu')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Dropmenu — Profile Dropdown')
  })
})
