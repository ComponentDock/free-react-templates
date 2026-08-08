import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

const services = ['Design', 'Industrial Design', 'Architecture Support', 'Renovation']

describe('Services', () => {
  it('shows the heading and every service', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Services/ })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service })).toBeInTheDocument()
    }
  })
})
