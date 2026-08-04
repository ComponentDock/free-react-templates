import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FarmToTable } from './FarmToTable'

describe('FarmToTable', () => {
  it('shows the heading and the four steps in order', () => {
    render(<FarmToTable />)

    expect(screen.getByRole('heading', { name: 'From Farm To Your Table' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Grow' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Harvest' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quality Check' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Deliver' })).toBeInTheDocument()
  })

  it('renders a card for every step', () => {
    render(<FarmToTable />)

    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
