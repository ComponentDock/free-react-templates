import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders at least two client cards with names and roles', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: /what clients say/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Danielle Benton' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dani Alves' })).toBeInTheDocument()
    expect(screen.getAllByText('Blogger/Client')).toHaveLength(2)
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
