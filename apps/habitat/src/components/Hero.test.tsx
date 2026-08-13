import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the two-line headline and a background photo', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2, name: 'Find your next' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'dream home.' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Luxury home interior/ })).toBeInTheDocument()
  })
})
