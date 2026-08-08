import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /What we offer to our clients/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interior Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Architecture Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Concept Design/i })).toBeInTheDocument()
  })
})
