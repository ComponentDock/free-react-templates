import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FindUs } from './FindUs'

describe('FindUs', () => {
  it('renders the heading and the four contact cards', () => {
    render(<FindUs />)
    expect(screen.getByRole('heading', { name: 'How to Find Us' })).toBeInTheDocument()
    for (const card of ['Location', 'Call Us', 'Mail Us', 'Join With Us']) {
      expect(screen.getByRole('heading', { name: card })).toBeInTheDocument()
    }
  })
})
