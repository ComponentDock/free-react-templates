import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders subheading and headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Leave the house cleaning chores to us/)).toBeInTheDocument()
    expect(screen.getByText(/dirty work/)).toBeInTheDocument()
  })

  it('renders Learn more CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
