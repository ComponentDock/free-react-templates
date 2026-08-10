import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RetroLayout } from './RetroLayout'
import { retroCards } from '../data'

describe('RetroLayout', () => {
  it('renders all retro photo cards with chips, titles and dates', () => {
    render(<RetroLayout />)

    expect(screen.getByRole('region', { name: 'Photo highlights' })).toBeInTheDocument()
    for (const card of retroCards) {
      expect(screen.getByRole('link', { name: new RegExp(card.title) })).toBeInTheDocument()
      expect(screen.getByText(card.date)).toBeInTheDocument()
    }
  })
})
