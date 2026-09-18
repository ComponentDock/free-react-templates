import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { name: /find job by category/i })).toBeInTheDocument()
  })

  it('renders all 8 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Accounting & Finance')).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
    expect(screen.getByText('Design & Creative')).toBeInTheDocument()
    expect(screen.getByText('Marketing & Sales')).toBeInTheDocument()
  })
})
