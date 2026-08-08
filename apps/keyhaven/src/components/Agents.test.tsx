import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Agents } from './Agents'

describe('Agents', () => {
  it('shows the heading and the three agent cards with photo, role, tagline and tags', () => {
    render(<Agents />)
    expect(screen.getByRole('heading', { name: 'Meet Our Agents' })).toBeInTheDocument()

    const sarah = screen.getByRole('heading', { name: 'Sarah Mitchell' }).closest('div')!
    expect(within(sarah).getByText('Senior Partner')).toBeInTheDocument()
    expect(within(sarah).getByText('$500M+ in sales')).toBeInTheDocument()
    expect(within(sarah).getByText('Luxury Properties')).toBeInTheDocument()
    expect(within(sarah).getByText('Penthouses')).toBeInTheDocument()
    expect(within(sarah).getByRole('img', { name: 'Sarah Mitchell' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Michael Chen' })).toBeInTheDocument()
    expect(screen.getByText('Senior Agent')).toBeInTheDocument()
    expect(screen.getByText('$250M+ in sales')).toBeInTheDocument()
    expect(screen.getByText('Investment Properties')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Jennifer Ross' })).toBeInTheDocument()
    expect(screen.getByText('$150M+ in sales')).toBeInTheDocument()
    expect(screen.getByText('Downtown Manhattan')).toBeInTheDocument()
    expect(screen.getByText('Lofts')).toBeInTheDocument()
  })

  it('shows Call and Email links for every agent plus the View All Agents link', () => {
    render(<Agents />)
    expect(screen.getAllByRole('link', { name: /Call/i })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Email/i })).toHaveLength(3)
    expect(screen.getByRole('link', { name: /View All Agents/i })).toBeInTheDocument()
  })
})
