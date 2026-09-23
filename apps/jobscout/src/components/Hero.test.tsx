import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText('Find the most exciting startup jobs')).toBeInTheDocument()
  })

  it('renders the search form with input, select, and button', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Job title or keyword')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /find job/i })).toBeInTheDocument()
  })

  it('has a search role on the form', () => {
    render(<Hero />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
