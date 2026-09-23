import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the counter heading', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', { name: /Interesting Facts/i })).toBeInTheDocument()
  })

  it('renders all stat values', () => {
    render(<Counter />)
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('351')).toBeInTheDocument()
    expect(screen.getByText('564')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Years of Experienced')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
    expect(screen.getByText('Working Days')).toBeInTheDocument()
  })
})
