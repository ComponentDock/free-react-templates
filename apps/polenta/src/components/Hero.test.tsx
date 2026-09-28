import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Welcome To Polenta Restaurant',
    )
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Experience the finest traditional dishes/)).toBeInTheDocument()
  })

  it('renders the Discover Menu button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Discover Menu/ })).toHaveAttribute('href', '#menu')
  })
})
