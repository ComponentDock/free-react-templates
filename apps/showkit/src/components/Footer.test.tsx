import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(/Copyright © 2026 All rights reserved.*made with.*React/),
    ).toBeInTheDocument()
  })
})
