import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Experience } from './Experience'

describe('Experience', () => {
  it('shows the band blurb', () => {
    render(<Experience />)

    expect(screen.getByText(/flexible, convenient and reusable layouts/i)).toBeInTheDocument()
  })

  it('shows the About Us button', () => {
    render(<Experience />)

    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })
})
