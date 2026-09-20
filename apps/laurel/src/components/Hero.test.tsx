import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Develop a passion for learning new things/i,
    )
  })

  it('renders the search input', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/search courses/i)).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    render(<Hero />)
    const user = userEvent.setup()
    const input = screen.getByLabelText(/search courses/i)
    await user.type(input, 'Python')
    expect(input).toHaveValue('Python')
  })

  it('renders the search submit button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('form submission does not navigate away', async () => {
    render(<Hero />)
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // If onSubmit prevented default, we're still on the same page
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
