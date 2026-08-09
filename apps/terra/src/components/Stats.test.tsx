import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('shows the four stats with their labels', () => {
    render(<Stats />)
    expect(screen.getByText('60')).toBeInTheDocument()
    expect(screen.getByText('9,200')).toBeInTheDocument()
    expect(screen.getByText('5,800')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Beauticians')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Treatments Done')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
