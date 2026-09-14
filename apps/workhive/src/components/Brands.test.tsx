import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all 5 brand placeholders', () => {
    render(<Brands />)
    expect(screen.getByText('Brand Alpha')).toBeInTheDocument()
    expect(screen.getByText('Brand Beta')).toBeInTheDocument()
    expect(screen.getByText('Brand Gamma')).toBeInTheDocument()
    expect(screen.getByText('Brand Delta')).toBeInTheDocument()
    expect(screen.getByText('Brand Epsilon')).toBeInTheDocument()
  })

  it('renders on peach background', () => {
    render(<Brands />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('bg-peach')
  })
})
