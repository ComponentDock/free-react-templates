import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facts } from './Facts'

describe('Facts', () => {
  it('renders four stat counters with labels', () => {
    render(<Facts />)
    expect(screen.getByText('2536')).toBeInTheDocument()
    expect(screen.getByText('6784')).toBeInTheDocument()
    expect(screen.getByText('1059')).toBeInTheDocument()
    expect(screen.getByText('2239')).toBeInTheDocument()
    for (const label of ['Projects Completed', 'Happy Clients', 'Expert Workers', 'Awards Won']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
