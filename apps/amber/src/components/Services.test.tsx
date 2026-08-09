import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and at least three price cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our service/i })).toBeInTheDocument()
    expect(screen.getByText('Men’s Facial')).toBeInTheDocument()
    expect(screen.getByText('Clean Cut')).toBeInTheDocument()
    expect(screen.getByText('Close Shave')).toBeInTheDocument()
    expect(screen.getAllByText('$15').length).toBeGreaterThanOrEqual(3)
  })
})
