import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Leaders In Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /House Planning/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /House Building/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Design & Build/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Property Consultancy/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Learn more/i }).length).toBe(4)
  })
})
