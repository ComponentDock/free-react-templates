import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the section heading and project cards', () => {
    render(<Works />)
    expect(screen.getByRole('heading', { name: /Our Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pool Decor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Seat Decor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Intuitive Idea/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
})
