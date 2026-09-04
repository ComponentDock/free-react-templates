import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the demo section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #09')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Tickpick')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tickpick — Checkbox Task-List Component')
  })
})
