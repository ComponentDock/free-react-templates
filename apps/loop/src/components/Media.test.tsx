import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Media } from './Media'

describe('Media', () => {
  it('renders heading, description, CTA, and images', () => {
    render(<Media />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Get anything done/)
    expect(screen.getByText(/Separated they live/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#contact')
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
