import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BePart } from './BePart'

describe('BePart', () => {
  it('renders the heading and CTA', () => {
    render(<BePart />)
    expect(screen.getByText(/Be a part of the breakthrough/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#causes')
  })

  it('renders the image', () => {
    render(<BePart />)
    expect(screen.getByRole('img', { name: /volunteers working together/i })).toBeInTheDocument()
  })
})
