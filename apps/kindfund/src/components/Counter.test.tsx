import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 4 stat items', () => {
    render(<Counter />)
    expect(screen.getByText('Total Donations')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('Volunteers')).toBeInTheDocument()
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('32')).toBeInTheDocument()
    expect(screen.getByText('Happy Faces')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
  })
})
