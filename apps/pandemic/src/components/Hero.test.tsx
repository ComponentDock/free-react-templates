import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/stay safe/i)).toBeInTheDocument()
    expect(screen.getByText(/stay home/i)).toBeInTheDocument()
    expect(screen.getByText(/learn how to protect yourself/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /how to prevent/i })).toBeInTheDocument()
  })

  it('has the curved bottom-right shape class', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('rounded-br-[50%]')
  })
})
