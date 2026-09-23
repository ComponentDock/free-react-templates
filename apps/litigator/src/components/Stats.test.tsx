import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders heading and all four stat cards', () => {
    render(<Stats />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('50 Years')
    expect(screen.getByText('90+')).toBeInTheDocument()
    expect(screen.getByText('3K+')).toBeInTheDocument()
    expect(screen.getByText('2K+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
    expect(screen.getByText('Cases Won')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Attorneys')).toBeInTheDocument()
  })
})
