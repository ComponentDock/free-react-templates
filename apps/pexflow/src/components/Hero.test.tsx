import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline with Superior highlighted', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Committed to/)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Superior/)
  })

  it('renders subtext paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/world-class construction/i)).toBeInTheDocument()
  })

  it('renders View project CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /View project/i })).toBeInTheDocument()
  })
})
