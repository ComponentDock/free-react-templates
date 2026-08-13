import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, subtext, CTA button, and photo', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText('Welcome To Our Website')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Bring Fun Life To Your Kids',
    )
    expect(screen.getByText('Amazing Playground for your kids')).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'LEARN MORE' })
    expect(cta).toHaveAttribute('href', '#packages')

    const photo = container.querySelector('img')
    expect(photo).toHaveAttribute('src', expect.stringContaining('id/823'))
    expect(photo).toHaveAttribute('alt', '')
  })
})
