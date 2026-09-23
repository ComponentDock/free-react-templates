import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByText('LogDrop')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('LogDrop — Login Form Template')
  })
})
