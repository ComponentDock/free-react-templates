import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Mission } from './Mission'

describe('Mission', () => {
  it('shows the section heading and subtext', () => {
    render(<Mission />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Building a Better World Together' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Our mission is simple/)).toBeInTheDocument()
  })

  it('shows the three cause cards', () => {
    render(<Mission />)

    for (const title of ['Education', 'Healthcare', 'Sustainability']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/Building schools, training teachers/)).toBeInTheDocument()
    expect(screen.getByText(/Bringing clinics, clean water/)).toBeInTheDocument()
    expect(screen.getByText(/Supporting farmers and local enterprises/)).toBeInTheDocument()
  })
})
