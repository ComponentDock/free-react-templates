import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone and email contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('+10 367 267 2678')).toBeInTheDocument()
    expect(screen.getByText('info@mercy.org')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
