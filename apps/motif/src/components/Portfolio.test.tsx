import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and at least four project cards', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'See our Online Portfolio' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(4)
  })
})
