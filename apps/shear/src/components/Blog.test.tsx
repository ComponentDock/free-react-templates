import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Our Blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders three post cards with meta and titles', () => {
    render(<Blog />)
    for (const title of [
      '7 Best Haircuts for Summer',
      '4 Grooming Habits Every Man Should Own',
      'Why You Should Visit the Barbershop Today',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/July 17, 2019/)).toHaveLength(3)
  })
})
