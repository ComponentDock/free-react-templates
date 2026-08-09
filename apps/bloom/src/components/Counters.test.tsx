import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('shows the four statistics', () => {
    render(<Counters />)

    expect(screen.getByText('1200')).toBeInTheDocument()
    expect(screen.getByText('Makeup Over Done')).toBeInTheDocument()
    expect(screen.getByText('850')).toBeInTheDocument()
    expect(screen.getByText('Happy Client')).toBeInTheDocument()
    expect(screen.getByText('3400')).toBeInTheDocument()
    expect(screen.getByText('Procedures')).toBeInTheDocument()
    expect(screen.getByText('2100')).toBeInTheDocument()
    expect(screen.getByText('Skin Treatments')).toBeInTheDocument()
  })
})
