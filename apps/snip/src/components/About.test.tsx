import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows a heading and supporting copy', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/traditional barber shop/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /barber shop interior/i })).toBeInTheDocument()
  })
})
