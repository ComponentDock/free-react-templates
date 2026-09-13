import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 4 stats', () => {
    render(<Counter />)
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('1254+')).toBeInTheDocument()
    expect(screen.getByText('2000+')).toBeInTheDocument()
    expect(screen.getByText('42+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Years Of Experience')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Clients')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Awards & Certificates')).toBeInTheDocument()
  })
})
