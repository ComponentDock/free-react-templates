import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Achievements } from './Achievements'

describe('Achievements', () => {
  it('renders four stat items with values and labels', () => {
    render(<Achievements />)

    expect(screen.getByText('1500+')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()

    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Expert Doctors')).toBeInTheDocument()

    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()

    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Emergency Care')).toBeInTheDocument()
  })
})
