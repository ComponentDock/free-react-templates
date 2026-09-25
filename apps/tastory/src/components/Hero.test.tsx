import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome To Tastory')
    expect(screen.getByText(/come and eat well/i)).toBeInTheDocument()
  })

  it('renders reservation button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /reservation/i })).toHaveAttribute('href', '#contact')
  })
})
