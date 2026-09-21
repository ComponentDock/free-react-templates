import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline text and subtitle', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Iron/)
    expect(heading.textContent).toMatch(/Pulse/)
    expect(screen.getByText('Crossfit. Working Harder')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('opens video modal when play button is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /play video/i }))
    expect(screen.getByRole('dialog', { name: /video player/i })).toBeInTheDocument()
  })

  it('closes video modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /play video/i }))
    await user.click(screen.getByRole('button', { name: /close video/i }))
    expect(screen.queryByRole('dialog', { name: /video player/i })).not.toBeInTheDocument()
  })
})
