import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('displays all four statistics', () => {
    render(<Stats />)

    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('Years Of Experience')).toBeInTheDocument()
    expect(screen.getByText('700+')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('Certificate')).toBeInTheDocument()
    expect(screen.getByText('40+')).toBeInTheDocument()
    expect(screen.getByText('Dentist')).toBeInTheDocument()
  })
})
