import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders four labeled company statistics', () => {
    render(<Stats />)

    expect(screen.getByRole('region', { name: 'Company statistics' })).toBeInTheDocument()

    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('On-Time Delivery')).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
  })
})
