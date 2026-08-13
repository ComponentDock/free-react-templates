import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the full-viewport hero with the rotated edge text', () => {
    render(<Hero />)
    const section = screen.getByTestId('hero')
    expect(section).toHaveAttribute('id', 'home-section')
    expect(section.className).toContain('min-h-screen')
    expect(screen.getByText(hero.edgeText)).toBeInTheDocument()
  })

  it('composes the carousel and the yellow countdown bar', () => {
    render(<Hero />)
    expect(screen.getByTestId('carousel')).toBeInTheDocument()
    expect(screen.getByTestId('countdown')).toBeInTheDocument()
  })
})
