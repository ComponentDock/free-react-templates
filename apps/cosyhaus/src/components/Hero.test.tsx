import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the headline and tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/Modern Interior/)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to Cosyhaus/)).toBeInTheDocument()
  })

  it('has a play button link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Play introduction video/i })).toBeInTheDocument()
  })
})
