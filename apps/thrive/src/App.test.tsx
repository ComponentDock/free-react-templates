import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Thrive')).toBeInTheDocument()
    expect(screen.getByText('A big business starts small')).toBeInTheDocument()
    expect(screen.getByText('As seen on')).toBeInTheDocument()
    expect(screen.getByText('A better way to run your business')).toBeInTheDocument()
    expect(screen.getByText('Productive with Thrive')).toBeInTheDocument()
    expect(screen.getByText('Stats')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders no ColorLib references', () => {
    render(<App />)
    const body = document.body.textContent || ''
    expect(body).not.toMatch(/colorlib/i)
  })
})
