import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} Zest`)),
    ).toBeInTheDocument()
  })

  it('credits the original ColorLib design', () => {
    render(<Footer />)

    expect(screen.getByText(/inspired by ColorLib's Zeedapp/i)).toBeInTheDocument()
  })
})
