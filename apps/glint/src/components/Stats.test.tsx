import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders four statistics', () => {
    render(<Stats />)
    expect(screen.getByText('531')).toBeInTheDocument()
    expect(screen.getByText('14K')).toBeInTheDocument()
    expect(screen.getByText('678')).toBeInTheDocument()
    expect(screen.getByText('2134')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('X-rays')).toBeInTheDocument()
    expect(screen.getByText('Tooth Brushes')).toBeInTheDocument()
    expect(screen.getByText('Extractions')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
  })
})
