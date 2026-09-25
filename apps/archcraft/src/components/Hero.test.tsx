import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Interior Design/i })).toBeInTheDocument()
    expect(screen.getByText(/We create inspiring spaces/)).toBeInTheDocument()
  })

  it('has a play button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const btn = screen.getByRole('button', { name: 'Play video' })
    expect(btn).toBeInTheDocument()
    await user.click(btn)
  })
})
