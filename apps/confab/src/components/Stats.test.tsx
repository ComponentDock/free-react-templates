import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders three columns of pink numbers with captions', () => {
    render(<Stats />)

    expect(screen.getByRole('region', { name: 'Event statistics' })).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getByText('Day Event')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Sponsors')).toBeInTheDocument()
  })
})
