import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders a guardian quote card with name and role', () => {
    render(<Testimonials />)

    expect(screen.getByText('Jhon Walker')).toBeInTheDocument()
    expect(screen.getByText('Head of web design')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Jhon Walker' })).toBeInTheDocument()
  })
})
