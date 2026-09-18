import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders heading', () => {
    render(<Process />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Approach')
  })

  it('renders 3 process steps', () => {
    render(<Process />)
    expect(screen.getByText('Data Gathering')).toBeInTheDocument()
    expect(screen.getByText('Implementation')).toBeInTheDocument()
    expect(screen.getByText('Launch')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<Process />)
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })
})
