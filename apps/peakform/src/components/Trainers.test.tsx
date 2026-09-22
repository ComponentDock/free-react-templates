import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders the section heading', () => {
    render(<Trainers />)
    expect(screen.getByText(/our trainers/i)).toBeInTheDocument()
  })

  it('renders trainer cards', () => {
    render(<Trainers />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBe(3)
  })

  it('displays trainer names', () => {
    render(<Trainers />)
    expect(screen.getByText(/michael johnson/i)).toBeInTheDocument()
    expect(screen.getByText(/sarah williams/i)).toBeInTheDocument()
    expect(screen.getByText(/david brown/i)).toBeInTheDocument()
  })

  it('displays trainer roles', () => {
    render(<Trainers />)
    expect(screen.getByText(/yoga trainer/i)).toBeInTheDocument()
  })
})
