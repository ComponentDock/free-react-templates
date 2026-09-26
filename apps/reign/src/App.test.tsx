import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Reign').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Do What You Love')).toBeInTheDocument()
    expect(screen.getByText('Interface Design')).toBeInTheDocument()
    expect(screen.getAllByText('Portfolio').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Google')).toBeInTheDocument()
  })
})
