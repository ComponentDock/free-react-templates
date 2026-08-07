import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, sub-headline, Get premium button, and dashboard preview', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Take on your biggest projects and goals',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText("with Blueprint's high quality features")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get premium' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Blueprint app dashboard preview' })).toBeInTheDocument()
  })
})
