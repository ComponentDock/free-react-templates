import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { slides } from '../data'

describe('Hero', () => {
  it('renders three slides with the first one active', () => {
    render(<Hero />)
    const region = screen.getByRole('region', { name: 'Featured classes' })
    expect(region).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: slides[0]!.headline })).toBeVisible()
    expect(screen.getByRole('link', { name: slides[0]!.cta })).toHaveAttribute('href', '#pricing')
    expect(screen.getAllByRole('button', { name: /^Slide/ })).toHaveLength(3)
    expect(document.querySelectorAll('[data-active="true"]')).toHaveLength(1)
  })

  it('switches slides through the numeric pagination', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Slide 02' }))
    expect(screen.getByRole('button', { name: 'Slide 02' })).toHaveAttribute('aria-current', 'true')
    expect(document.querySelectorAll('[data-active="true"]')).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 2, name: slides[1]!.headline })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Slide 03' }))
    expect(screen.getByRole('heading', { level: 2, name: slides[2]!.headline })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: slides[2]!.cta })).toBeInTheDocument()
  })
})
