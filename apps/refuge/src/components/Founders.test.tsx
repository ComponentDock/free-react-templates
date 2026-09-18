import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Founders } from './Founders'

describe('Founders', () => {
  it('renders section heading', () => {
    render(<Founders />)
    expect(screen.getByText('Our Founders')).toBeInTheDocument()
  })

  it('renders two founder profiles', () => {
    render(<Founders />)
    expect(screen.getByText('Alex Peters')).toBeInTheDocument()
    expect(screen.getByText('Shane Cripton')).toBeInTheDocument()
  })

  it('renders titles and bios', () => {
    render(<Founders />)
    expect(screen.getByText('CEO, Co-Founder')).toBeInTheDocument()
    expect(screen.getByText('President, Co-Founder')).toBeInTheDocument()
    expect(screen.getByText(/20 years of experience/)).toBeInTheDocument()
    expect(screen.getByText(/background in finance/)).toBeInTheDocument()
  })
})
