import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReadMore } from './ReadMore'

describe('ReadMore', () => {
  it('renders a white variant by default', () => {
    render(<ReadMore />)
    const link = screen.getByRole('link', { name: /Read More/ })
    expect(link).toHaveClass('text-white')
    expect(link).not.toHaveClass('text-ink')
  })

  it('renders the dark variant with the label and href', () => {
    render(<ReadMore label="READ MORE" href="#post" dark />)
    const link = screen.getByRole('link', { name: /READ MORE/ })
    expect(link).toHaveAttribute('href', '#post')
    expect(link).toHaveClass('text-ink')
  })
})
