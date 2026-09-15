import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Comparison } from './Comparison'

describe('Comparison', () => {
  it('renders heading and two comparison columns', () => {
    render(<Comparison />)
    expect(screen.getByText(/Get Your Own Highly Skilled/i)).toBeInTheDocument()
    expect(screen.getByText('Regular Office Employee')).toBeInTheDocument()
    expect(screen.getByText('Virtual Assistant Employee')).toBeInTheDocument()
  })

  it('renders feature items for both columns', () => {
    render(<Comparison />)
    expect(screen.getByText('Dedicated workspace required')).toBeInTheDocument()
    expect(screen.getByText('Work from anywhere')).toBeInTheDocument()
  })
})
