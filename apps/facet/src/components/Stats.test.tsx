import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the heading and four stat counters', () => {
    render(<Stats />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Since we started work in 1980' }),
    ).toBeInTheDocument()
    for (const label of [
      'Years of experience',
      'Project Done',
      'Our Architect',
      'Happy Customers',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('42')).toBeInTheDocument()
  })
})
