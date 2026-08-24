import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /gastronome/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByText('Italian Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Book a Table')).toBeInTheDocument()
    expect(screen.getByText('Review')).toBeInTheDocument()
    expect(screen.getByText('Our Video')).toBeInTheDocument()
    expect(screen.getByText('The Blog')).toBeInTheDocument()
    expect(screen.getByText('Sign Up for Updates')).toBeInTheDocument()
  })
})
