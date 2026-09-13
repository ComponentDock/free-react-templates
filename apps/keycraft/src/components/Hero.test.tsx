import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subtitle', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /We Provide Best Locksmith Services All Over World/,
    )
    expect(screen.getByText('Best locksmith')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '#contact')
  })
})
