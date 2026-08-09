import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and introductory copy', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /the house of hair salon & spa/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/working in a salon, you look at trends all day long/i),
    ).toBeInTheDocument()
  })
})
