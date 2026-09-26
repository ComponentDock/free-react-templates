import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the counter heading', () => {
    render(<Counter />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('I love to share my achievements')).toBeInTheDocument()
  })

  it('renders 3 counter items', () => {
    render(<Counter />)
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Project done')).toBeInTheDocument()
    expect(screen.getByText('Cups of coffee')).toBeInTheDocument()
  })

  it('renders counter values', () => {
    render(<Counter />)
    expect(screen.getByText('420')).toBeInTheDocument()
    expect(screen.getByText('890')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })
})
