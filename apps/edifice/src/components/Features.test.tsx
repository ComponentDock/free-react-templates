import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three building-drawings cards with blurbs', () => {
    render(<Features />)
    expect(screen.getAllByRole('heading', { level: 2, name: /Building Drawings/i })).toHaveLength(3)
    expect(screen.getAllByText(/far away, behind the word mountains/i)).toHaveLength(3)
  })
})
