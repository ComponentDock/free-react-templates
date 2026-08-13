import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('shows four blocks with green icons, white numbers, and white labels', () => {
    const { container } = render(<Counters />)
    expect(screen.getByText('2,260')).toBeInTheDocument()
    expect(screen.getByText('210')).toBeInTheDocument()
    expect(screen.getByText('887')).toBeInTheDocument()
    expect(screen.getByText('1,920')).toBeInTheDocument()
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('Daily Visitors')).toBeInTheDocument()
    expect(screen.getByText('Health Program')).toBeInTheDocument()
    expect(screen.getByText('Heart Beat')).toBeInTheDocument()
    const icons = container.querySelectorAll('svg.text-primary')
    expect(icons).toHaveLength(4)
    expect(screen.getByText('2,260')).toHaveClass('text-white')
  })
})
