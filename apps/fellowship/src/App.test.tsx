import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /top navigation/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/hero/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/latest sermon/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /welcome to fellowship/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/features/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/church services/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/sermons and events/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/testimonials/i)).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Fellowship — Church Community')
  })
})
