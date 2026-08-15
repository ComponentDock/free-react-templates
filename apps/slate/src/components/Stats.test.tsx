import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders four stats with values and labels', () => {
    render(<Stats />)
    expect(screen.getByText('240+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('180')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('32')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('sits inside a section with the about id', () => {
    const { container } = render(<Stats />)
    const section = container.querySelector('section#about')
    expect(section).not.toBeNull()
  })
})
