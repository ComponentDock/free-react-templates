import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Table')).toBeInTheDocument()
  })

  it('renders all three plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Early Bird')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Corporate')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$65')).toBeInTheDocument()
    expect(screen.getByText('$85')).toBeInTheDocument()
    expect(screen.getByText('$95')).toBeInTheDocument()
  })

  it('marks Early Bird as recommended', () => {
    render(<Pricing />)
    expect(screen.getByText('Recommended')).toBeInTheDocument()
  })

  it('renders purchase buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Purchase')
    expect(buttons).toHaveLength(3)
  })

  it('has a section landmark', () => {
    render(<Pricing />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
