import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the login card', () => {
    render(<App />)
    expect(screen.getByText('Welcome Back')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gatepass — Login Form Template')
  })
})
