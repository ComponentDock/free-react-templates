import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SizeScale } from './SizeScale'

describe('SizeScale', () => {
  it('renders the section heading', () => {
    render(<SizeScale />)
    expect(screen.getByRole('heading', { name: /Size Scale/i })).toBeInTheDocument()
  })

  it('renders three buttons with size labels', () => {
    render(<SizeScale />)
    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
    const buttons = screen.getAllByRole('button', { name: 'Button' })
    expect(buttons).toHaveLength(3)
  })

  it('renders size labels as text', () => {
    render(<SizeScale />)
    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
  })

  it('has three buttons total', () => {
    render(<SizeScale />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })
})
