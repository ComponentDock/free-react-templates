import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and the Contact us call to action', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /take the world's best quality treatment/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '#contact')
  })
})
