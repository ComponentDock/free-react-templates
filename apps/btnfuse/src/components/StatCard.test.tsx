import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatCard } from './StatCard'
import { Brush } from 'lucide-react'

describe('StatCard', () => {
  it('renders number and label', () => {
    render(
      <StatCard
        number="275"
        label="New Posts"
        icon={<Brush className="h-7 w-7 text-white" />}
        iconPosition="left"
        variant="white"
        iconColor="purple"
      />,
    )
    expect(screen.getByText('275')).toBeInTheDocument()
    expect(screen.getByText('New Posts')).toBeInTheDocument()
  })

  it('renders icon on left when iconPosition is left', () => {
    const { container } = render(
      <StatCard
        number="100"
        label="Test"
        icon={<Brush data-testid="icon" className="h-7 w-7 text-white" />}
        iconPosition="left"
        variant="white"
        iconColor="purple"
      />,
    )
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
    const firstChild = button?.children[0]
    expect(firstChild).toBeDefined()
    expect(firstChild?.querySelector('[data-testid="icon"]')).toBeInTheDocument()
  })

  it('renders icon on right when iconPosition is right', () => {
    const { container } = render(
      <StatCard
        number="100"
        label="Test"
        icon={<Brush data-testid="icon" className="h-7 w-7 text-white" />}
        iconPosition="right"
        variant="white"
        iconColor="purple"
      />,
    )
    const button = container.querySelector('button')
    const secondChild = button?.children[1]
    expect(secondChild).toBeDefined()
    expect(secondChild?.querySelector('[data-testid="icon"]')).toBeInTheDocument()
  })

  it('applies white variant class', () => {
    const { container } = render(
      <StatCard
        number="1"
        label="A"
        icon={<Brush />}
        iconPosition="left"
        variant="white"
        iconColor="purple"
      />,
    )
    const button = container.querySelector('button')
    expect(button?.className).toContain('stat-card-white')
  })

  it('applies colored variant class', () => {
    const { container } = render(
      <StatCard
        number="1"
        label="A"
        icon={<Brush />}
        iconPosition="left"
        variant="purple"
        iconColor="purple"
      />,
    )
    const button = container.querySelector('button')
    expect(button?.className).toContain('stat-card-purple')
  })

  it('applies correct icon color class', () => {
    const { container } = render(
      <StatCard
        number="1"
        label="A"
        icon={<Brush />}
        iconPosition="left"
        variant="white"
        iconColor="teal"
      />,
    )
    const iconDiv = container.querySelector('.stat-icon')
    expect(iconDiv?.className).toContain('icon-teal')
  })
})
