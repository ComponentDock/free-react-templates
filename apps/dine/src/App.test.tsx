import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all section components', () => {
    render(<App />)
    expect(screen.getByText('Dine')).toBeInTheDocument()
    expect(screen.getByText(/Delicious Food/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Restaurant' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })
})
