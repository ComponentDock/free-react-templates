import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    expect(screen.getByText('Build With Love')).toBeInTheDocument()
    expect(screen.getByText('Fast Loading')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/contemporary architectural solutions/)).toBeInTheDocument()
    expect(screen.getByText(/crafted with passion/)).toBeInTheDocument()
    expect(screen.getByText(/efficient design process/)).toBeInTheDocument()
  })

  it('renders feature icons', () => {
    const { container } = render(<Features />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(3)
  })
})
