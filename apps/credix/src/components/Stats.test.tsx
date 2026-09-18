import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the heading and description', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { name: /Helping small businesses/i })).toBeInTheDocument()
    expect(screen.getByText(/Morbi ut dapibus dui/)).toBeInTheDocument()
  })

  it('renders the three skill indicators', () => {
    render(<Stats />)
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('Energy')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('Power')).toBeInTheDocument()
    expect(screen.getByText('97%')).toBeInTheDocument()
    expect(screen.getByText('Resource')).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Stats />)
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })
})
