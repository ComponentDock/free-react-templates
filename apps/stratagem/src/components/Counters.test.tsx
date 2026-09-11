import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all 4 counters', () => {
    render(<Counters />)
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('97%')).toBeInTheDocument()
    expect(screen.getByText('5628')).toBeInTheDocument()
    expect(screen.getByText('5637')).toBeInTheDocument()
  })

  it('renders counter labels', () => {
    render(<Counters />)
    expect(screen.getByText('Team Members')).toBeInTheDocument()
    expect(screen.getByText('Business Success')).toBeInTheDocument()
    expect(screen.getByText('Happy Client')).toBeInTheDocument()
    expect(screen.getByText('Business Done')).toBeInTheDocument()
  })

  it('has a dark overlay background', () => {
    const { container } = render(<Counters />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('relative')
  })
})
