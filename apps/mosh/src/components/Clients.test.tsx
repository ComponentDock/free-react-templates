import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the heading and at least four client logos', () => {
    render(<Clients />)

    expect(
      screen.getByRole('heading', { name: 'All our clients love our work' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(4)
  })
})
