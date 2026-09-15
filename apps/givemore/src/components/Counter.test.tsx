import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 4 stat items', () => {
    render(<Counter />)
    expect(screen.getByText('Total Collection')).toBeInTheDocument()
    expect(screen.getByText('$2.4M')).toBeInTheDocument()
    expect(screen.getByText('Helped People')).toBeInTheDocument()
    expect(screen.getByText('12,847')).toBeInTheDocument()
    expect(screen.getByText('Total Volunteers')).toBeInTheDocument()
    expect(screen.getByText('3,256')).toBeInTheDocument()
    expect(screen.getByText('Successful Missions')).toBeInTheDocument()
    expect(screen.getByText('486')).toBeInTheDocument()
  })
})
