import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the introducing subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Introducing')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Azureline')
  })
})
