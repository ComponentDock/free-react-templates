import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Perfect Solution/i)
  })

  it('displays all four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 3, name: /graphic design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /web design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /branding/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /web development/i })).toBeInTheDocument()
  })
})
