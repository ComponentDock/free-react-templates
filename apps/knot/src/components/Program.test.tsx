import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Program } from './Program'
import { programCards, programTitle } from '../data'

describe('Program', () => {
  it('renders the title and three program cards', () => {
    render(<Program />)
    expect(screen.getByRole('heading', { level: 2, name: programTitle })).toBeInTheDocument()
    for (const card of programCards) {
      expect(screen.getByText(card.time)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.text)).toBeInTheDocument()
    }
  })
})
