import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat values', () => {
    render(<Stats />)
    expect(screen.getByText('2393')).toBeInTheDocument()
    expect(screen.getByText('54')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('550')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Completed Projects')).toBeInTheDocument()
    expect(screen.getByText('Winners & Awards')).toBeInTheDocument()
    expect(screen.getByText('Number of Team')).toBeInTheDocument()
    expect(screen.getByText('Lines of Code')).toBeInTheDocument()
  })
})
