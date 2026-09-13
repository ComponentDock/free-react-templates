import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Episodes } from './Episodes'

describe('Episodes', () => {
  it('renders the section heading', () => {
    render(<Episodes />)
    expect(screen.getByRole('heading', { level: 2, name: /latest episodes/i })).toBeInTheDocument()
  })

  it('renders episode cards with titles', () => {
    render(<Episodes />)
    expect(screen.getByText(/Dealing With Technical Support/)).toBeInTheDocument()
    expect(screen.getByText(/Stu Unger/)).toBeInTheDocument()
    expect(screen.getByText(/Become A Travel Pro/)).toBeInTheDocument()
  })

  it('shows category and duration for each episode', () => {
    render(<Episodes />)
    const meta = screen.getAllByText(/Music, Radio · 40 mins/)
    expect(meta.length).toBe(6)
  })

  it('shows play buttons for episodes', () => {
    render(<Episodes />)
    const playButtons = screen.getAllByRole('button', { name: /play episode/i })
    expect(playButtons.length).toBe(6)
  })

  it('shows episode artwork images', () => {
    render(<Episodes />)
    const images = screen.getAllByRole('img', { name: /artwork/i })
    expect(images.length).toBe(6)
  })
})
