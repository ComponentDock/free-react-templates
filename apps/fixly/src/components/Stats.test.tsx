import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the heading and four counters', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { name: /Technical Statistics/i })).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('3,200+')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Expert Mechanics')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction Rate')).toBeInTheDocument()
  })
})
