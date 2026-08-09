import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the background image and the script wordmark', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /barber at work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Clipper' })).toBeInTheDocument()
    expect(screen.getByText('Barber Shop')).toBeInTheDocument()
  })
})
