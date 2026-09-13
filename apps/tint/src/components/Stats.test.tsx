import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { name: /Some statistics/i })).toBeInTheDocument()
  })

  it('displays 4 stat items', () => {
    render(<Stats />)
    expect(screen.getByText('258+')).toBeInTheDocument()
    expect(screen.getByText('Projects Done')).toBeInTheDocument()
    expect(screen.getByText('942+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('958+')).toBeInTheDocument()
    expect(screen.getByText('Real Professionals')).toBeInTheDocument()
    expect(screen.getByText('2000+')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
  })
})
