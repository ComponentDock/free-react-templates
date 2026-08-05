import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the section heading and four screenshot placeholders', () => {
    render(<Screenshots />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Unique Screenshots' }),
    ).toBeInTheDocument()

    for (let index = 1; index <= 4; index += 1) {
      expect(screen.getByRole('img', { name: `BulkApp screenshot ${index}` })).toBeInTheDocument()
    }
  })
})
