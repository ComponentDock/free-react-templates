import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, tagline, and both gradient buttons', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'We Combine Business with Finance' }),
    ).toBeInTheDocument()
    expect(screen.getByText('We work hard, we result perfect')).toBeInTheDocument()

    const explore = screen.getByRole('link', { name: 'Explore Us' })
    expect(explore).toHaveAttribute('href', '#services')
    expect(explore).toHaveClass('bg-coral-gradient')

    const quote = screen.getByRole('link', { name: 'Get Free Quote' })
    expect(quote).toHaveAttribute('href', '#contact')
    expect(quote).toHaveClass('bg-mint-gradient')

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/60/1920/1080',
    )
    expect(container.querySelector('div.bg-brand-gradient-vertical')).toBeInTheDocument()
  })
})
