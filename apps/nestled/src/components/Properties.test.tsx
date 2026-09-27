import { render, screen } from '@testing-library/react'
import { Properties } from './Properties'
import { describe, expect, it } from 'vitest'

describe('Properties', () => {
  it('renders the heading', () => {
    render(<Properties />)
    expect(screen.getByRole('heading', { level: 2, name: 'Properties' })).toBeInTheDocument()
  })

  it('renders property cards', () => {
    render(<Properties />)
    expect(screen.getByText('$849,200')).toBeInTheDocument()
    expect(screen.getByText('2 Zwar Place, Florey')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Properties />)
    expect(screen.getByRole('button', { name: 'Previous properties' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next properties' })).toBeInTheDocument()
  })

  it('renders multiple properties', () => {
    render(<Properties />)
    expect(screen.getByText('$900,295')).toBeInTheDocument()
    expect(screen.getByText('$2,013,920')).toBeInTheDocument()
  })
})
