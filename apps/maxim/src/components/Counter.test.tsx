import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all four stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Trusted Clients')).toBeInTheDocument()
    expect(screen.getByText('Qualified Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Honors & Awards')).toBeInTheDocument()
  })

  it('renders all four stat numbers', () => {
    render(<Counter />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('10,000')).toBeInTheDocument()
    expect(screen.getByText('564')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
  })
})
