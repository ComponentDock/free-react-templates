import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Create, Code, and Launch.')
  })

  it('renders the subtitle paragraph', () => {
    render(<Hero />)
    expect(
      screen.getByText(
        /Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts\. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean\./i,
      ),
    ).toBeInTheDocument()
  })

  it('renders the Get Started CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#get-started')
  })

  it('renders two feature cards', () => {
    render(<Hero />)
    expect(screen.getByText('High Quality')).toBeInTheDocument()
    expect(screen.getByText('Creative Solutions')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /creative workspace/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the quote overlay', () => {
    render(<Hero />)
    expect(screen.getByText(/Daniella Wood/)).toBeInTheDocument()
    expect(screen.getByText(/Founder @ Sketch/)).toBeInTheDocument()
  })
})
