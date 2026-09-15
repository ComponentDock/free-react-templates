import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the section title and three cause cards', () => {
    render(<Causes />)

    expect(screen.getByText('Donation shows Passion')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Causes' })).toBeInTheDocument()

    for (const title of ['Clean Water Initiative', 'Education For All', 'Medical Relief Fund']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('displays progress bars with raised and goal amounts', () => {
    render(<Causes />)

    expect(screen.getByText('Raised: $1,533')).toBeInTheDocument()
    expect(screen.getByText('Goal: $2,500')).toBeInTheDocument()
    expect(screen.getByText('Raised: $2,100')).toBeInTheDocument()
    expect(screen.getByText('Goal: $3,000')).toBeInTheDocument()
  })
})
