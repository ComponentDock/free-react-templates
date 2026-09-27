import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText(/Sundial/)).toBeInTheDocument()
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
    expect(screen.getByText('Are you looking for a place to rent?')).toBeInTheDocument()
    expect(screen.getByText('Client testimonials')).toBeInTheDocument()
    expect(screen.getByText('Jeremy Scott')).toBeInTheDocument()
  })
})
