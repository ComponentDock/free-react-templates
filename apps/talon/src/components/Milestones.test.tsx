import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Milestones } from './Milestones'

describe('Milestones', () => {
  it('renders four milestone items with values and labels', () => {
    render(<Milestones />)

    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()

    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()

    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()

    expect(screen.getByText('1000+')).toBeInTheDocument()
    expect(screen.getByText('Coffee Cups')).toBeInTheDocument()
  })
})
