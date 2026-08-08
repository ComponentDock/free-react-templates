import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('shows the four stat cards', () => {
    render(<Stats />)

    expect(screen.getByText('12M+')).toBeInTheDocument()
    expect(screen.getByText('Active Investors')).toBeInTheDocument()
    expect(screen.getByText('$180B+')).toBeInTheDocument()
    expect(screen.getByText('Assets Under Custody')).toBeInTheDocument()
    expect(screen.getByText('5M+')).toBeInTheDocument()
    expect(screen.getByText('Trades Executed Daily')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Countries Supported')).toBeInTheDocument()
  })
})
