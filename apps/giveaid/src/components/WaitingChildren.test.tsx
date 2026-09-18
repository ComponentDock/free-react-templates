import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WaitingChildren } from './WaitingChildren'

describe('WaitingChildren', () => {
  it('renders heading', () => {
    render(<WaitingChildren />)
    expect(screen.getByText('Waiting Children')).toBeInTheDocument()
  })

  it('renders all 5 children', () => {
    render(<WaitingChildren />)
    expect(screen.getByText(/Edward/)).toBeInTheDocument()
    expect(screen.getByText(/Mellisa/)).toBeInTheDocument()
    expect(screen.getByText(/Mark/)).toBeInTheDocument()
    expect(screen.getByText(/Jessa/)).toBeInTheDocument()
    expect(screen.getByText(/Ben/)).toBeInTheDocument()
  })

  it('renders ages for children', () => {
    render(<WaitingChildren />)
    const ages = screen.getAllByText(/yrs\. old/)
    expect(ages.length).toBe(5)
  })

  it('renders Find More button', () => {
    render(<WaitingChildren />)
    expect(screen.getByText('Find More Waiting Children')).toBeInTheDocument()
  })

  it('children images have alt text', () => {
    render(<WaitingChildren />)
    expect(screen.getByAltText('Edward, age 14')).toBeInTheDocument()
    expect(screen.getByAltText('Mellisa, age 6')).toBeInTheDocument()
  })
})
