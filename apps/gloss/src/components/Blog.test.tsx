import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the makeup artist tips heading and three post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Makeup artist tips' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Tips From Makeup Artists/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Everything I Learned/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /10 Makeup-Artist Tips/ })).toBeInTheDocument()
    expect(screen.getAllByText('Rosie Chapman')).toHaveLength(3)
    expect(screen.getAllByText('Jun 15, 2020')).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
