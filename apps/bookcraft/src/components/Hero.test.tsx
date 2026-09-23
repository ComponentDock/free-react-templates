import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Meet Your Next Book/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Buy This Book On Amazon/i })).toBeInTheDocument()
  })

  it('renders the book cover image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Book cover')).toBeInTheDocument()
  })
})
