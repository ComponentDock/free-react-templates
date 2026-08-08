import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Innovative } from './Innovative'

describe('Innovative', () => {
  it('renders three feature cards with titles and blurbs', () => {
    render(<Innovative />)
    expect(screen.getByRole('heading', { name: /Innovative Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Smart Planning/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Creative Build/i })).toBeInTheDocument()
    expect(screen.getAllByText(/living over the god/i)).toHaveLength(3)
  })
})
