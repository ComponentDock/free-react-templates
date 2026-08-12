import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders both slides with the amber subheading and headline highlight', () => {
    render(<Hero />)
    expect(screen.getAllByText('Hello!')).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 1, name: "I'm Alex Maverick" })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: "I'm a web designer" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Freelance Web Designer' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'based in London' })).toBeInTheDocument()
  })

  it('renders the CTA pills on both slides', () => {
    render(<Hero />)
    expect(screen.getAllByRole('link', { name: 'Hire me' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'My works' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Hire me' })[0]).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })

  it('renders the portrait images', () => {
    const { container } = render(<Hero />)
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
