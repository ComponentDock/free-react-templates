import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facts } from './Facts'

describe('Facts', () => {
  it('renders all five stat counters', () => {
    render(<Facts />)

    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('6,784')).toBeInTheDocument()
    expect(screen.getByText('1,059')).toBeInTheDocument()
    expect(screen.getByText('2,239')).toBeInTheDocument()
    expect(screen.getByText('435')).toBeInTheDocument()

    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Really Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Total Tasks Completed')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee Taken')).toBeInTheDocument()
    expect(screen.getByText('In House Professionals')).toBeInTheDocument()
  })
})
