import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome To Our Site')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByText(/We have the best solution for your business to grow/),
    ).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Delivering innovative strategies/)).toBeInTheDocument()
  })

  it('renders the Get started button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })
})
