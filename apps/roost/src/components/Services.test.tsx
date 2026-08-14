import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { ABOUT_ROWS, SERVICES } from '../data'

describe('Services', () => {
  it('renders the black box with the four icon services', () => {
    render(<Services />)

    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.caption)).toBeInTheDocument()
    }
  })

  it('renders the About Us column with Mission and Vision rows', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    for (const row of ABOUT_ROWS) {
      expect(screen.getByRole('heading', { name: row.title })).toBeInTheDocument()
      expect(screen.getByText(row.blurb)).toBeInTheDocument()
    }
  })
})
