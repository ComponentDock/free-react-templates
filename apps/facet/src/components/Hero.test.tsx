import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, and action buttons', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /We have a passion in creating new and unique spaces/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/without going around in circles/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request a quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch Video/ })).toBeInTheDocument()
  })
})
