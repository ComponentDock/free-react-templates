import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and feature cards', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Expert Technicians/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Professional Service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Great Support/i })).toBeInTheDocument()
  })
})
