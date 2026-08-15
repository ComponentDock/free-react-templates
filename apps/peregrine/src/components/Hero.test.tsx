import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { heroText, heroTitle } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and supporting paragraph', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroText)).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
  })
})
