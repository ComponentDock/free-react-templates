import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Counsel')).toBeInTheDocument()
    expect(screen.getByText('Legal Dept')).toBeInTheDocument()
    expect(screen.getByText('Compliance')).toBeInTheDocument()
    expect(screen.getByText('Identity')).toBeInTheDocument()
    expect(screen.getByText('Hall of Justice')).toBeInTheDocument()
    expect(screen.getByText('Law Abiding')).toBeInTheDocument()
  })

  it('renders descriptions for each card', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/a small river named duden/i)
    expect(descriptions.length).toBe(6)
  })

  it('has a section with id services', () => {
    render(<Services />)
    expect(document.getElementById('services')).toBeInTheDocument()
  })
})
