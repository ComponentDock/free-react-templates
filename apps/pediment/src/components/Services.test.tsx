import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('What we do')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Services />)
    expect(screen.getByText('Our specialization')).toBeInTheDocument()
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Office Design')).toBeInTheDocument()
    expect(screen.getByText('Home Design')).toBeInTheDocument()
    expect(screen.getByText('Design drawing')).toBeInTheDocument()
  })

  it('renders counter stats', () => {
    render(<Services />)
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getByText('127')).toBeInTheDocument()
    expect(screen.getByText('36')).toBeInTheDocument()
    expect(screen.getByText('74')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Services />)
    expect(screen.getByText(/Projects/)).toBeInTheDocument()
    expect(screen.getByText(/Happy/)).toBeInTheDocument()
    expect(screen.getByText(/Awards/)).toBeInTheDocument()
    expect(screen.getByText(/Cups Of/)).toBeInTheDocument()
  })
})
