import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Chefs } from './Chefs'

describe('Chefs', () => {
  it('renders four chef cards with names and roles', () => {
    render(<Chefs />)

    expect(screen.getByRole('heading', { name: 'Our Master Chef' })).toBeInTheDocument()
    expect(screen.getByText('Chef')).toBeInTheDocument()

    for (const [name, role] of [
      ['Ava Laurent', 'Restaurant Owner'],
      ['Rebeca Welson', 'Head Chef'],
      ['Maya Chen', 'Pastry Chef'],
      ['Sofia Reyes', 'Sous Chef'],
    ] as const) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `${name}, ${role}` })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
