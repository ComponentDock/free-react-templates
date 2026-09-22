import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheading and video button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Yoga Enhances Your Life/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Zenbloom Studio/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play introduction video/i })).toBeInTheDocument()
  })
})
