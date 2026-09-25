import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome heading and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /welcome to taster/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /reserve a table/i })).toBeInTheDocument()
  })

  it('CTA links to the reservation section', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /reserve a table/i })
    expect(link).toHaveAttribute('href', '#reservation')
  })
})
