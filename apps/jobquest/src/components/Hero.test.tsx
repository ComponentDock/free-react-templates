import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('A Powerful Career Website Template')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Find your dream jobs/)).toBeInTheDocument()
  })

  it('renders the search form with 3 inputs and a submit button', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Job title, keywords...')).toBeInTheDocument()
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(2)
    expect(screen.getByRole('button', { name: /search job/i })).toBeInTheDocument()
  })

  it('handles form submission without page reload', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByPlaceholderText('Job title, keywords...'), 'Developer')
    await user.click(screen.getByRole('button', { name: /search job/i }))
  })
})
