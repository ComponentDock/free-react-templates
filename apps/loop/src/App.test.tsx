import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Loop')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/We are pretty/)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /What We Offer/ })).toBeInTheDocument()
    expect(screen.getByText('Stats')).toBeInTheDocument()
    expect(screen.getByText(/Get anything done/)).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
