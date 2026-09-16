import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamProfiles } from './TeamProfiles'

describe('TeamProfiles', () => {
  it('renders 3 team members with names and roles', () => {
    render(<TeamProfiles />)
    expect(screen.getByText('Adam Smith')).toBeInTheDocument()
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Jessica Brown')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
    expect(screen.getByText('Senior Consultant')).toBeInTheDocument()
  })

  it('renders circular photos', () => {
    render(<TeamProfiles />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(3)
  })
})
