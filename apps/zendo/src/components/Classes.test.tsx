import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Classes } from './Classes'
import { classes } from '../data'

describe('Classes', () => {
  it('renders six class cards with image, title and date line', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Classes' })).toBeInTheDocument()
    for (const item of classes) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getAllByText(item.date).length).toBeGreaterThan(0)
      expect(screen.getByRole('img', { name: item.title })).toHaveAttribute('src', item.image)
    }
  })
})
