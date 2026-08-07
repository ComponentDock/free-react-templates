import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and the two call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Design\.\s+Development\.\s+Hosting\./)

    expect(screen.getByRole('link', { name: 'Get started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get domain' })).toBeInTheDocument()
  })
})
