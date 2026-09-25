import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and subtitle', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Crafting')
    expect(screen.getByText('Art and Crafting / Acting and Philosophy')).toBeInTheDocument()
  })
})
