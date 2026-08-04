import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Benefits } from './Benefits'

describe('Benefits', () => {
  it('shows the four benefit blocks with titles', () => {
    render(<Benefits />)

    expect(screen.getByRole('heading', { name: 'Best Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Farm Experiences' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '100% Natural' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Farm Equipment' })).toBeInTheDocument()
  })

  it('renders a card with copy for every benefit', () => {
    render(<Benefits />)

    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getByText(/Friendly support and honest advice/)).toBeInTheDocument()
  })
})
