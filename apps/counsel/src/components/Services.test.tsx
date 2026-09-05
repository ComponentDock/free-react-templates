import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all four services', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByText('Get Law Advice')).toBeInTheDocument()
    expect(screen.getByText('Review The Case')).toBeInTheDocument()
    expect(screen.getByText('Winning Guarantee')).toBeInTheDocument()
    expect(screen.getByText('Fully Support')).toBeInTheDocument()
  })
})
