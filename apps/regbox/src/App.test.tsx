import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the registration form with heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('New Account?')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('RegBox — Registration Form Template')
  })
})
