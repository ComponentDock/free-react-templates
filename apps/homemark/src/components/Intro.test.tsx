import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the heading and villa titles', () => {
    render(<Intro />)
    expect(screen.getByText('Our Houses')).toBeInTheDocument()
    expect(screen.getByText('MODERN VILLA 1')).toBeInTheDocument()
    expect(screen.getByText('MODERN VILLA 2')).toBeInTheDocument()
  })

  it('renders More Info buttons', () => {
    render(<Intro />)
    const buttons = screen.getAllByText('More Info')
    expect(buttons).toHaveLength(2)
  })

  it('renders villa images', () => {
    render(<Intro />)
    expect(screen.getByAltText('MODERN VILLA 1')).toBeInTheDocument()
    expect(screen.getByAltText('MODERN VILLA 2')).toBeInTheDocument()
  })
})
