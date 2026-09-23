import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders login form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /login to portico/i })).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Portico — Login Form Template')
  })
})
