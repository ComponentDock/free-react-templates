import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders event cards with titles', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: 'Our Latest Events' })).toBeInTheDocument()
    expect(screen.getByText('Intern Bootcamp Meetup')).toBeInTheDocument()
    expect(screen.getByText('Annual Science Fair')).toBeInTheDocument()
    expect(screen.getByText('Career Guidance Workshop')).toBeInTheDocument()
  })
})
