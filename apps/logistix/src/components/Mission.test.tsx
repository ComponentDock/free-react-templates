import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mission } from './Mission'

describe('Mission', () => {
  it('renders the Our Mission label', () => {
    render(<Mission />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
  })

  it('renders the mission quote', () => {
    render(<Mission />)
    expect(screen.getByText(/We are able to handle any size load/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<Mission />)
    expect(screen.getByRole('link', { name: /Learn More/ })).toBeInTheDocument()
  })
})
