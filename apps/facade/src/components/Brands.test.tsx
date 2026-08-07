import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders at least three brand logo placeholders', () => {
    render(<Brands />)

    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
})
