import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the heading and five numbered service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /Services/ })).toBeInTheDocument()
    expect(screen.getByText(SERVICES.lead)).toBeInTheDocument()

    for (const item of SERVICES.items) {
      expect(screen.getByText(item.number)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    }
    expect(SERVICES.items).toHaveLength(5)
  })
})
