import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Help the poor in need')
    expect(screen.getByText('Lend the helping hand get involved')).toBeInTheDocument()
  })

  it('renders the Become A Volunteer button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Become A Volunteer/i })).toHaveAttribute(
      'href',
      '#volunteer',
    )
  })

  it('renders the Watch our video link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Watch our video/i })).toBeInTheDocument()
  })
})
