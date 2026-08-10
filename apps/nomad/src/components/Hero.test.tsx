import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with author, watermark, headline, excerpt and CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('img', { name: /Dave Lewis/ })).toBeInTheDocument()
    expect(screen.getByText(/Written by/)).toBeInTheDocument()
    expect(screen.getByText(/Dave Lewis/)).toBeInTheDocument()
    expect(screen.getByText('Europe')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Switzerland famous for chocolate making' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden flows/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Continue Reading/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Switzerland/ })).toBeInTheDocument()
  })

  it('switches slides via the next control and dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { name: 'Hawaii known as the Big Island' }),
    ).toBeInTheDocument()
    expect(screen.getByText('USA')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(
      screen.getByRole('heading', { name: 'Switzerland famous for chocolate making' }),
    ).toBeInTheDocument()
  })

  it('wraps around when reaching the last slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { name: 'Switzerland famous for chocolate making' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { name: 'Hawaii known as the Big Island' }),
    ).toBeInTheDocument()
  })

  it('marks the active dot', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'false',
    )
  })
})
