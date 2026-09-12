import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GameTypes } from './GameTypes'

describe('GameTypes', () => {
  it('renders 4 game type cards', () => {
    render(<GameTypes />)
    expect(screen.getByText('New Release')).toBeInTheDocument()
    expect(screen.getByText('Strategy')).toBeInTheDocument()
    expect(screen.getByText('RPG')).toBeInTheDocument()
    expect(screen.getByText('Racing')).toBeInTheDocument()
  })

  it('renders game titles', () => {
    render(<GameTypes />)
    expect(screen.getByText('Cyber Nexus: Awakening')).toBeInTheDocument()
    expect(screen.getByText('Empire Forge: Conquest')).toBeInTheDocument()
    expect(screen.getByText('Shadow Realms Online')).toBeInTheDocument()
    expect(screen.getByText('Velocity Rush GT')).toBeInTheDocument()
  })

  it('renders comment counts', () => {
    render(<GameTypes />)
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
    expect(screen.getByText('8 Comments')).toBeInTheDocument()
    expect(screen.getByText('15 Comments')).toBeInTheDocument()
    expect(screen.getByText('6 Comments')).toBeInTheDocument()
  })
})
