import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Find Online Courses That Suit You/i }),
    ).toBeInTheDocument()
  })

  it('renders the search form with all controls', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search courses')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByLabelText('Difficulty')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('submits the search form without error', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('Search courses')
    await user.type(input, 'math')
    await user.click(screen.getByRole('button', { name: /Search/i }))
    // form submits without throwing
    expect(input).toHaveValue('math')
  })
})
