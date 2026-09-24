import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders Most Popular section', () => {
    render(<Sidebar />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByText('Global Travel And Vacations Luxury Travel')).toBeInTheDocument()
    expect(screen.getByText('Cruising Destination Ideas For Your Next Trip')).toBeInTheDocument()
  })

  it('renders Latest Videos section', () => {
    render(<Sidebar />)
    expect(screen.getByText('Latest Videos')).toBeInTheDocument()
    expect(screen.getByText(/Coventry City Guide/)).toBeInTheDocument()
    expect(screen.getByText(/Get Ready Fast For Fall/)).toBeInTheDocument()
  })

  it('renders advertisement placeholder', () => {
    render(<Sidebar />)
    expect(screen.getByText('Advertisement')).toBeInTheDocument()
    expect(screen.getByText('Ad Space')).toBeInTheDocument()
  })

  it('renders post stats for popular items', () => {
    render(<Sidebar />)
    expect(screen.getByText('2.4k')).toBeInTheDocument()
    expect(screen.getByText('189')).toBeInTheDocument()
    expect(screen.getByText('24')).toBeInTheDocument()
  })
})
