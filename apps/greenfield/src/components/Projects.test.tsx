import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading', () => {
    render(<Projects />)
    expect(screen.getByText('Explore Projects')).toBeInTheDocument()
  })

  it('renders all project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Organic Solution')).toBeInTheDocument()
    expect(screen.getByText('Harvest Innovation')).toBeInTheDocument()
    expect(screen.getByText('Farm System')).toBeInTheDocument()
    expect(screen.getByText('Agricultural Farming')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<Projects />)
    expect(screen.getByRole('img', { name: 'Organic Solution' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Harvest Innovation' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Farm System' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Agricultural Farming' })).toBeInTheDocument()
  })
})
