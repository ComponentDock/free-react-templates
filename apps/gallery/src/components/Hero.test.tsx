import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading with design resources text', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/design resources/i)
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/free downloads only on fridays/i)).toBeInTheDocument()
  })
})
