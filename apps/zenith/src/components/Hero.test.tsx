import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline and subtext', () => {
    render(<Hero />)
    expect(screen.getByText('New with AI-powered automation')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /build better products/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/the all-in-one platform that helps teams ship quality software/i),
    ).toBeInTheDocument()
  })

  it('renders the primary and secondary CTAs', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Start free trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch demo' })).toBeInTheDocument()
  })

  it('renders the stats row', () => {
    render(<Hero />)
    expect(screen.getByText('10k+')).toBeInTheDocument()
    expect(screen.getAllByText('Active users').length).toBeGreaterThan(0)
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getAllByText('Uptime SLA').length).toBeGreaterThan(0)
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getAllByText('Integrations').length).toBeGreaterThan(0)
    expect(screen.getByText('4.9★')).toBeInTheDocument()
    expect(screen.getAllByText('User rating').length).toBeGreaterThan(0)
  })

  it('renders a dashboard preview panel', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Product dashboard preview' })).toBeInTheDocument()
    expect(screen.getByText('Total Revenue')).toBeInTheDocument()
    expect(screen.getByText('$24,563')).toBeInTheDocument()
    expect(screen.getByText('Active Users')).toBeInTheDocument()
    expect(screen.getByText('1,234')).toBeInTheDocument()
  })
})
