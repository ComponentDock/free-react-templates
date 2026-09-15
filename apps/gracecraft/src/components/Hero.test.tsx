import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays headline, body text, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Belief in God/)
    expect(screen.getByText(/God has revealed himself/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /join with us/i })).toBeInTheDocument()
  })
})
