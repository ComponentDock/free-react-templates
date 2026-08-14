import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the centered title and the three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /My Offered Services/ })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.description)).toBeInTheDocument()
    }
  })
})
