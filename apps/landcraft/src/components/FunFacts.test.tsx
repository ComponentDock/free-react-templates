import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import FunFacts from './FunFacts'

describe('FunFacts', () => {
  it('renders all four statistics', () => {
    render(<FunFacts />)
    expect(screen.getByText('2,157')).toBeInTheDocument()
    expect(screen.getByText('15,445')).toBeInTheDocument()
    expect(screen.getByText('145')).toBeInTheDocument()
    expect(screen.getByText('1,200')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<FunFacts />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
  })
})
