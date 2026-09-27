import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Agents } from './Agents'

describe('Agents', () => {
  it('renders the section heading', () => {
    render(<Agents />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Agents')
  })

  it('shows at least three agent cards', () => {
    render(<Agents />)
    expect(screen.getByText('Carlos Henderson')).toBeInTheDocument()
    expect(screen.getByText('Mike Bochs')).toBeInTheDocument()
    expect(screen.getByText('Jessica Moore')).toBeInTheDocument()
  })

  it('shows social media links for agents', () => {
    render(<Agents />)
    expect(screen.getByLabelText('Carlos Henderson on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Carlos Henderson on Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Carlos Henderson on LinkedIn')).toBeInTheDocument()
  })
})
