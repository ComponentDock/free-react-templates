import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('renders all 4 stats', () => {
    render(<FunFacts />)
    expect(screen.getByText('20k')).toBeInTheDocument()
    expect(screen.getByText('124')).toBeInTheDocument()
    expect(screen.getByText('600k')).toBeInTheDocument()
    expect(screen.getByText('15k')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<FunFacts />)
    expect(screen.getByText('Graduated Students')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
    expect(screen.getByText('Books in Library')).toBeInTheDocument()
    expect(screen.getByText('Students Get Employed')).toBeInTheDocument()
  })
})
