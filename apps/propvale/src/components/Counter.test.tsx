import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all three stat values and labels', () => {
    render(<Counter />)

    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('Properties for sale')).toBeInTheDocument()

    expect(screen.getByText('300')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()

    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})
