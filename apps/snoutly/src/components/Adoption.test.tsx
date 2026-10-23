import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Adoption } from './Adoption'

describe('Adoption', () => {
  it('shows the heading, stat counters, and CTA', () => {
    render(<Adoption />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('We need your help')
    expect(screen.getByText('590+')).toBeInTheDocument()
    expect(screen.getByText('Pets Available')).toBeInTheDocument()
    expect(screen.getByText('300+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Browse Now' })).toHaveAttribute('href', '#contact')
  })
})
