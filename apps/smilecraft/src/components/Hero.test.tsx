import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, paragraph, breadcrumb, and appointment button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Modern Dentistry in a Calm/ }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Experience exceptional dental care/)).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Welcome')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Make an Appointment/ })).toBeInTheDocument()
  })
})
