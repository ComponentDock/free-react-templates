import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the "Since 1982" badge, headline, and highlight word', () => {
    render(<Hero />)
    expect(screen.getByText(hero.badge)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.headline)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.highlight)
  })

  it('renders the two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Contact us/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Request A Quote/ })).toBeInTheDocument()
  })
})
