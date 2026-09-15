import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroImage } from '../data'

describe('Hero', () => {
  it('renders heading, subtitle, CTA and background image', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Synod — A Place of Faith')
    expect(screen.getByText(/Building a community/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join us' })).toHaveAttribute('href', '#about')

    const img = container.querySelector('img[aria-hidden="true"]')
    expect(img).toHaveAttribute('src', heroImage)
  })

  it('renders decorative slide arrows', () => {
    render(<Hero />)

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })
})
