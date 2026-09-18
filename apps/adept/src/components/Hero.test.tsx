import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Do Awesome Things')
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders hero image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /hero illustration/i })).toBeInTheDocument()
  })
})
