import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Rank the Best Courses on the Web',
    )
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/discover thousands/i)).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Search Courses')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})
