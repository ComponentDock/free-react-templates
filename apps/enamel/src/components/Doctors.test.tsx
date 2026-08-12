import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  it('shows the heading and four doctor cards with roles and blurbs', () => {
    render(<Doctors />)

    expect(screen.getByText('Doctors')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Qualified Doctors' })).toBeInTheDocument()

    for (const name of [
      'Dr. Lloyd Wilson',
      'Dr. Rachel Parker',
      'Dr. Ian Smith',
      'Dr. Alicia Henderson',
    ]) {
      const card = screen.getByRole('heading', { name }).closest('div')!
      expect(within(card).getByText('Dentist')).toBeInTheDocument()
    }
  })

  it('renders three hover-reveal social links per doctor', () => {
    render(<Doctors />)

    for (const label of ['Facebook', 'Twitter', 'LinkedIn']) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(4)
    }
  })
})
