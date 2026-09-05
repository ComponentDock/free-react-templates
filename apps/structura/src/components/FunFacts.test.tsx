import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('displays all 4 stat values', () => {
    render(<FunFacts />)
    expect(screen.getByText('16')).toBeInTheDocument()
    expect(screen.getByText('75')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
  })

  it('displays stat labels', () => {
    render(<FunFacts />)
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
  })
})
