import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the heading and three cause cards with progress bars', () => {
    const { container } = render(<Causes />)
    expect(screen.getByRole('heading', { name: 'Our Priorities' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Clean water for South Sudan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Home for Asias Child' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education for Asian School' })).toBeInTheDocument()
    expect(screen.getAllByText('$3,800 to go').length).toBe(3)
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('40%')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-testid="progress-fill"]').length).toBe(3)
  })
})
