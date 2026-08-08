import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and subtext', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Loved by Developers' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/See what engineering teams around the world say/)).toBeInTheDocument()
  })

  it('renders three testimonials with quotes, names, roles, and avatars', () => {
    render(<Testimonials />)

    expect(
      screen.getByText(/cut our deployment time from 30 minutes to 30 seconds/),
    ).toBeInTheDocument()
    expect(screen.getByText(/infrastructure costs dropped 40%/)).toBeInTheDocument()
    expect(screen.getByText(/edge functions are a game changer/)).toBeInTheDocument()

    for (const name of ['Sarah Chen', 'Marcus Rodriguez', 'Aisha Patel']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    for (const role of [
      'CTO, DataStream',
      'Lead Engineer, Fintech Labs',
      'VP Engineering, NovaTech',
    ]) {
      expect(screen.getByText(role)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
