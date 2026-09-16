import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Build Dreams')
    expect(screen.getByRole('button', { name: /browse services/i })).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('We are Hammerly')).toBeInTheDocument()
  })
})
