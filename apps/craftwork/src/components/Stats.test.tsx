import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'
import { describe, expect, it } from 'vitest'

describe('Stats', () => {
  it('renders section heading', () => {
    render(<Stats />)
    expect(screen.getByText('Experiences')).toBeInTheDocument()
  })

  it('renders all stat values', () => {
    render(<Stats />)
    expect(screen.getByText('12+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('80+')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
