import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders section heading', () => {
    render(<Causes />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Most Popular Causes')
  })

  it('renders three cause cards', () => {
    render(<Causes />)
    expect(screen.getByText('Help Children To Get Food')).toBeInTheDocument()
    expect(screen.getByText('Help Children To Get Health')).toBeInTheDocument()
    expect(screen.getByText('Help Children To Get Education')).toBeInTheDocument()
  })

  it('renders raised and goal amounts', () => {
    render(<Causes />)
    expect(screen.getByText('$49,112')).toBeInTheDocument()
    expect(screen.getByText('$50,000')).toBeInTheDocument()
    expect(screen.getByText('$28,127')).toBeInTheDocument()
  })

  it('renders time remaining labels', () => {
    render(<Causes />)
    expect(screen.getByText('2 hours remaining')).toBeInTheDocument()
    expect(screen.getByText('7 days remaining')).toBeInTheDocument()
    expect(screen.getByText('15 days remaining')).toBeInTheDocument()
  })

  it('renders Donate Now buttons', () => {
    render(<Causes />)
    const buttons = screen.getAllByText('Donate Now!')
    expect(buttons).toHaveLength(3)
  })

  it('renders See all causes link', () => {
    render(<Causes />)
    expect(screen.getByText('See all causes')).toBeInTheDocument()
  })
})
