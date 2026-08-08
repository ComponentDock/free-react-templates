import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and supporting copy', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Architects with need a different design/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
  })
})
