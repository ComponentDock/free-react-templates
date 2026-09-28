import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Corkage/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Fresh And Delicious Food/i)).toBeInTheDocument()
    expect(screen.getByText(/Sed ut perspiciatis/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Menu/i)).toBeInTheDocument()
    expect(screen.getByText(/What Our Guests Say/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Book a Table/i).length).toBeGreaterThan(0)
  })
})
