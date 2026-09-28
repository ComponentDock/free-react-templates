import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the hero heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText(/Fresh And Delicious Food/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Menus/i })).toHaveAttribute('href', '#menu')
  })
})
