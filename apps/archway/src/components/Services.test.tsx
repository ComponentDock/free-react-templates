import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Perfectly Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Carefully Planned' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Smartly Execute' })).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(descriptions.length).toBe(3)
  })
})
