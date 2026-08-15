import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { hero } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the date, title, location, blurb, and both buttons', () => {
    render(<Hero />)
    expect(screen.getByText(hero.date)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: hero.title })).toBeInTheDocument()
    expect(screen.getByText(hero.location)).toBeInTheDocument()
    expect(screen.getByText(hero.blurb)).toBeInTheDocument()
    for (const button of hero.buttons) {
      expect(screen.getByRole('link', { name: button.label })).toBeInTheDocument()
    }
  })
})
