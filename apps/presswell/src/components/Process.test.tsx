import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders the section heading', () => {
    render(<Process />)
    expect(screen.getByRole('heading', { name: /This is how we work/i })).toBeInTheDocument()
  })

  it('renders all three process steps', () => {
    render(<Process />)
    expect(screen.getByText('We collect your clothes')).toBeInTheDocument()
    expect(screen.getByText('Wash your clothes')).toBeInTheDocument()
    expect(screen.getByText('Get delivery')).toBeInTheDocument()
  })
})
