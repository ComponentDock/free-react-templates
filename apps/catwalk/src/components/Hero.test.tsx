import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, and subheadline', () => {
    render(<Hero />)
    expect(screen.getByText('Top Model')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Your Career of A Model')
    expect(screen.getByText('We Are Professional Model Agency Based in London')).toBeInTheDocument()
  })

  it('links the call-to-action to the contact section', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Contact Us/ })).toHaveAttribute('href', '#contact')
  })
})
