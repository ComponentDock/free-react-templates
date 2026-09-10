import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Statistics } from './Statistics'

describe('Statistics', () => {
  it('renders the section heading', () => {
    render(<Statistics />)
    expect(screen.getByText('Careers Statistics')).toBeInTheDocument()
  })

  it('renders all 4 stat labels', () => {
    render(<Statistics />)
    expect(screen.getByText('Candidates')).toBeInTheDocument()
    expect(screen.getByText('Jobs Posted')).toBeInTheDocument()
    expect(screen.getByText('Jobs Filled')).toBeInTheDocument()
    expect(screen.getByText('Companies')).toBeInTheDocument()
  })

  it('renders the counter target values', () => {
    render(<Statistics />)
    expect(screen.getByText('1,930')).toBeInTheDocument()
    expect(screen.getByText('54')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('550')).toBeInTheDocument()
  })
})
