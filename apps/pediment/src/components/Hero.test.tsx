import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText('Quality is not only our standard.')).toBeInTheDocument()
  })

  it('renders the primary CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'See Project' })).toHaveAttribute('href', '#projects')
  })

  it('renders the secondary CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Discover more' })).toHaveAttribute('href', '#about')
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
