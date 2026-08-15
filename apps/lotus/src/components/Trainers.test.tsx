import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('shows the heading and three trainer cards with photo, name, role, and button', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { name: 'Meet our trainers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Alice Smith' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'John Bulk' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Madonna Henderson' })).toBeInTheDocument()
    expect(screen.getByText('Yoga Expert')).toBeInTheDocument()
    expect(screen.getByText('Body Expert')).toBeInTheDocument()
    expect(screen.getByText('Health Expert')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'View class times' })).toHaveLength(3)
  })
})
