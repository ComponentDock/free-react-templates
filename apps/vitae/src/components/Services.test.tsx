import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()
  })

  it('renders all four service cards with headings and text', () => {
    render(<Services />)
    for (const item of services.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.text)).toBeInTheDocument()
    }
    expect(screen.getAllByTestId(/^service-/)).toHaveLength(4)
  })
})
