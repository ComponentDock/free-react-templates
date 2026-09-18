import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mission } from './Mission'

describe('Mission', () => {
  it('displays 4 mission items with titles', () => {
    render(<Mission />)
    expect(screen.getByText(/our mission/i)).toBeInTheDocument()
    expect(screen.getByText(/our community/i)).toBeInTheDocument()
    expect(screen.getByText(/our belief/i)).toBeInTheDocument()
    expect(screen.getByText(/our faith/i)).toBeInTheDocument()
  })

  it('shows descriptive text for each mission item', () => {
    render(<Mission />)
    expect(screen.getByText(/spread the love of God/)).toBeInTheDocument()
    expect(screen.getByText(/Building meaningful relationships/)).toBeInTheDocument()
  })
})
