import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat items with correct values', () => {
    render(<Stats />)

    expect(screen.getByText('750')).toBeInTheDocument()
    expect(screen.getByText('568')).toBeInTheDocument()
    expect(screen.getByText('478')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()

    expect(screen.getByText('Project Complete')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Cups of coffee')).toBeInTheDocument()
    expect(screen.getByText('Years experienced')).toBeInTheDocument()
  })
})
