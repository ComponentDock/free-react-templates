import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheading, description, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('4536+ Jobs listed')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Find your Dream Job' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/We've connected thousands/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Upload your Resume' })).toBeInTheDocument()
  })
})
