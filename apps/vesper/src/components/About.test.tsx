import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the split photo and welcome copy', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: /church interior/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Welcome to Vesper Church/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/We believe the church/i)).toBeInTheDocument()
  })
})
