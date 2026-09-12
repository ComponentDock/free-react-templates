import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Latest & Greatest/ })).toBeInTheDocument()
  })

  it('renders all six portfolio entries', () => {
    render(<Portfolio />)
    const viewButtons = screen.getAllByText('View Portfolio')
    expect(viewButtons).toHaveLength(6)
  })

  it('renders portfolio titles', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Midway' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Workplace Office' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jacket Leather' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Topless' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fashion Style' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Prickly' })).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    expect(screen.getByText(/Web Design/)).toBeInTheDocument()
    expect(screen.getAllByText(/Writing/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Illustration/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Application/)).toBeInTheDocument()
  })
})
