import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders 4 stat items', () => {
    render(<Counter />)
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('+1000')).toBeInTheDocument()
    expect(screen.getByText('14K')).toBeInTheDocument()
    expect(screen.getByText('732')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Followers on FB')).toBeInTheDocument()
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
  })
})
