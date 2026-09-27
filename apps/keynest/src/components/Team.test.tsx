import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Our Agents')).toBeInTheDocument()
  })

  it('renders 4 agent cards', () => {
    render(<Team />)
    expect(screen.getByText('Buster Hyman')).toBeInTheDocument()
    expect(screen.getByText('Sara Connor')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Rose')).toBeInTheDocument()
  })

  it('renders agent roles', () => {
    render(<Team />)
    expect(screen.getByText('Dual Agent')).toBeInTheDocument()
    expect(screen.getByText('Senior Agent')).toBeInTheDocument()
    expect(screen.getByText('Property Expert')).toBeInTheDocument()
    expect(screen.getByText('Listing Agent')).toBeInTheDocument()
  })

  it('renders social media links for agents', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText(/on Facebook/)
    expect(facebookLinks).toHaveLength(4)
    const twitterLinks = screen.getAllByLabelText(/on Twitter/)
    expect(twitterLinks).toHaveLength(4)
    const websiteLinks = screen.getAllByLabelText(/website/)
    expect(websiteLinks).toHaveLength(4)
  })
})
