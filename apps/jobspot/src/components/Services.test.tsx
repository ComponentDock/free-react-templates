import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Search Millions of Jobs')).toBeInTheDocument()
    expect(screen.getByText('Easy To Manage Jobs')).toBeInTheDocument()
    expect(screen.getByText('Top Careers')).toBeInTheDocument()
    expect(screen.getByText('Search Expert Candidates')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/A small river named Duden/i)
    expect(descriptions.length).toBe(4)
  })
})
