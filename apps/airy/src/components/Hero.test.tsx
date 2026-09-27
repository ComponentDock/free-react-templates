import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline, subheading, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Help to Build You the Product',
    )
    expect(screen.getByText('Business Solution')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get in touch/ })).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)

    const img = screen.getByRole('img', { name: 'Hero background' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
