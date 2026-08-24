import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the kicker text', () => {
    render(<Hero />)
    expect(screen.getByText('App Landing Page')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Get things done with Spark',
    )
  })

  it('renders the blurb', () => {
    render(<Hero />)
    expect(screen.getByText(/Spark helps you manage/i)).toBeInTheDocument()
  })

  it('renders the Download button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /download/i })).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /spark app preview/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/spark-hero/1200/600')
  })
})
