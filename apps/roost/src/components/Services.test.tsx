import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Find Places Anywhere in the World')).toBeInTheDocument()
    expect(screen.getByText('We Have Agents')).toBeInTheDocument()
    expect(screen.getByText('Buy & Rent Modern Properties')).toBeInTheDocument()
    expect(screen.getByText('Making Money')).toBeInTheDocument()
  })
})
