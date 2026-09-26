import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Interface Design')).toBeInTheDocument()
    expect(screen.getByText('Product Design')).toBeInTheDocument()
    expect(screen.getByText('Quality Results')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Beautiful, intuitive interfaces/)).toBeInTheDocument()
    expect(screen.getByText(/End-to-end product design/)).toBeInTheDocument()
    expect(screen.getByText(/Pixel-perfect execution/)).toBeInTheDocument()
  })

  it('renders icons for each service', () => {
    render(<Services />)
    const icons = document.querySelectorAll('section svg')
    expect(icons.length).toBe(3)
  })
})
