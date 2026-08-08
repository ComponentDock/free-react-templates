import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('shows the heading and all eight work items', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
    expect(screen.getByRole('heading', { name: 'Residence Work 01' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Residence Work 08' })).toBeInTheDocument()
  })
})
