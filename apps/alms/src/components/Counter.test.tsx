import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the served-over figure and its caption', () => {
    render(<Counter />)
    expect(screen.getByText('Served Over')).toBeInTheDocument()
    expect(screen.getByText('1,321,901')).toBeInTheDocument()
    expect(screen.getByText('Children in 150 Countries')).toBeInTheDocument()
  })

  it('links the counter button to the fundraisers section', () => {
    render(<Counter />)
    expect(screen.getByRole('link', { name: /view our program/i })).toHaveAttribute(
      'href',
      '#fundraisers',
    )
  })

  it('renders the introduction column', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', { name: 'Who Are We?' })).toBeInTheDocument()
    expect(screen.getByText(/communities across 150 countries/i)).toBeInTheDocument()
    expect(screen.getByText(/funds the work that never makes the news/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#stories')
  })
})
