import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting copy, and download CTA buttons', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Get things done with Appco' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download' })).toHaveAttribute('href', '#download')
    expect(screen.getByRole('img', { name: /Appco app on devices/ })).toBeInTheDocument()
  })
})
