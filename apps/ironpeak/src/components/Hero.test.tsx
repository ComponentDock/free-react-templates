import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Health is wealth')
    expect(screen.getByText(/Transform your body and mind/)).toBeInTheDocument()
  })

  it('has Get Started and Download CTAs', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#classes')
    expect(screen.getByRole('link', { name: 'Download' })).toHaveAttribute('href', '#')
  })
})
