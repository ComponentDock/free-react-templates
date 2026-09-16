import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the section heading', () => {
    render(<Causes />)
    expect(screen.getByRole('heading', { name: /Popular Causes/i })).toBeInTheDocument()
  })

  it('renders all four cause cards', () => {
    render(<Causes />)
    expect(screen.getByText('Clean Water Initiative')).toBeInTheDocument()
    expect(screen.getByText('Education for All')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Access')).toBeInTheDocument()
    expect(screen.getByText('Disaster Relief')).toBeInTheDocument()
  })

  it('renders Donate Now buttons for each cause', () => {
    render(<Causes />)
    const buttons = screen.getAllByRole('link', { name: /Donate Now/i })
    expect(buttons).toHaveLength(4)
  })

  it('renders progress bars', () => {
    render(<Causes />)
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('45%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
  })
})
