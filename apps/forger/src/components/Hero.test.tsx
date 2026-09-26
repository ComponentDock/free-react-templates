import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the greeting and name', () => {
    render(<Hero />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Alex Forger')).toBeInTheDocument()
  })

  it('shows the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('A Freelance Web Developer')).toBeInTheDocument()
  })

  it('shows the Hire me button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Hire me' })).toBeInTheDocument()
  })
})
