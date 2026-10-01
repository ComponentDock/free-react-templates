import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('renders the three counters with labels', () => {
    render(<FunFacts />)
    expect(screen.getByText('550+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('250+')).toBeInTheDocument()
    expect(screen.getByText('Cars in Stock')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Office in Cities')).toBeInTheDocument()
  })
})
