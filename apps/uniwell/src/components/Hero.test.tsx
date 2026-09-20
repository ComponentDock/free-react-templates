import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The Premium System Education',
    )
    expect(screen.getByText('Future Of Education Technology')).toBeInTheDocument()
  })

  it('renders the search form', () => {
    render(<Hero />)
    expect(screen.getByRole('search', { name: 'Course search' })).toBeInTheDocument()
    expect(screen.getByLabelText('Keyword search')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByLabelText('Price type')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders carousel navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('allows typing in the keyword search', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('Keyword search')
    await user.type(input, 'React')
    expect(input).toHaveValue('React')
  })

  it('has category dropdown options', () => {
    render(<Hero />)
    const categorySelect = screen.getByLabelText('Category')
    expect(categorySelect).toBeInTheDocument()
    // Check that options exist (not disabled placeholder)
    const options = categorySelect.querySelectorAll('option')
    expect(options.length).toBeGreaterThanOrEqual(4) // placeholder + categories
  })

  it('has price type dropdown options', () => {
    render(<Hero />)
    const priceSelect = screen.getByLabelText('Price type')
    expect(priceSelect).toBeInTheDocument()
    const options = priceSelect.querySelectorAll('option')
    expect(options.length).toBeGreaterThanOrEqual(3) // placeholder + price types
  })
})
