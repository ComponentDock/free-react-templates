import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Checkbox #17')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vex — Modern Animated Checkbox Template')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Vex')).toBeInTheDocument()
  })

  it('renders all four checkboxes', () => {
    render(<App />)
    expect(screen.getByText('Design the mockups')).toBeInTheDocument()
    expect(screen.getByText('Build the components')).toBeInTheDocument()
    expect(screen.getByText('Write the tests')).toBeInTheDocument()
    expect(screen.getByText('Ship to production')).toBeInTheDocument()
  })
})
