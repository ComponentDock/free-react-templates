import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all five stat items', () => {
    render(<Stats />)
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('6,784')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('1,059')).toBeInTheDocument()
    expect(screen.getByText('Tasks Completed')).toBeInTheDocument()
    expect(screen.getByText('2,239')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('435')).toBeInTheDocument()
    expect(screen.getByText('In-House Professionals')).toBeInTheDocument()
  })
})
