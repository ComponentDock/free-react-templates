import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Instructors } from './Instructors'

describe('Instructors', () => {
  it('shows the eyebrow and heading', () => {
    render(<Instructors />)

    expect(screen.getByText('Our Instructors')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Learn From the Best' }),
    ).toBeInTheDocument()
  })

  it('shows the four instructor cards with roles and companies', () => {
    render(<Instructors />)

    for (const name of ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim']) {
      expect(screen.getByText(name)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${name}` })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/coursely-teacher-'),
      )
    }

    expect(screen.getByText('Senior Engineer at Google')).toBeInTheDocument()
    expect(screen.getByText('ML Engineer at Netflix')).toBeInTheDocument()
    expect(screen.getByText('Product Designer at Airbnb')).toBeInTheDocument()
    expect(screen.getByText('Cloud Architect at AWS')).toBeInTheDocument()
  })
})
