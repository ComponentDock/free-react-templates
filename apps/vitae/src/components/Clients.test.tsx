import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Clients } from './Clients'
import { clients } from '../data'

describe('Clients', () => {
  it('renders the section title', () => {
    render(<Clients />)
    expect(screen.getByRole('heading', { level: 2, name: clients.heading })).toBeInTheDocument()
  })

  it('renders all six client logos', () => {
    render(<Clients />)
    for (const logo of clients.logos) {
      expect(screen.getByRole('img', { name: logo.name })).toHaveAttribute('src', logo.image)
    }
  })
})
