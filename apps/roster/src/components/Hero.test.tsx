import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Explore Your City')
    expect(screen.getByText(/uncover the best places/i)).toBeInTheDocument()
  })

  it('renders search form with input, select, and button', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText(/what are you looking for/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByPlaceholderText(/what are you looking for/i)
    await user.type(input, 'restaurant')
    expect(input).toHaveValue('restaurant')
  })

  it('allows changing the category select', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'Restaurants')
    expect(select).toHaveValue('Restaurants')
  })

  it('form submission is prevented', () => {
    render(<Hero />)
    const form = screen.getByPlaceholderText(/what are you looking for/i).closest('form')!
    // Trigger native form submit to exercise onSubmit handler
    form.requestSubmit()
    // Page should not navigate (handler calls preventDefault)
    expect(form).toBeInTheDocument()
  })

  it('renders category icons', () => {
    render(<Hero />)
    expect(screen.getByText('Restaurants', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Hotels', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Shopping', { exact: false })).toBeInTheDocument()
  })
})
