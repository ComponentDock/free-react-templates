import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Experts } from './Experts'

describe('Experts', () => {
  it('renders the heading and four trainer cards with names and roles', () => {
    render(<Experts />)

    expect(screen.getByRole('heading', { name: 'Ask the experts' })).toBeInTheDocument()

    for (const name of ['Julia Smith', 'Mick Hamilton', 'Jack Black', 'Criss James']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
    }

    expect(screen.getAllByText('Personal trainer')).toHaveLength(3)
    expect(screen.getByText('Fitness trainer')).toBeInTheDocument()
  })
})
