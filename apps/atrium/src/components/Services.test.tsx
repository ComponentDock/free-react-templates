import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Make Your Dream with Us' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Interior' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Exterior' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Bridge' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
