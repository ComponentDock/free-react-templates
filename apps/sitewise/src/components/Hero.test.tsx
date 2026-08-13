import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, and domain search form', () => {
    render(<Hero />)

    expect(screen.getByText('The Best Domain & Hosting Provider In The Area')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Go Big with your next Domain/ }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Find your domain')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/ })).toBeInTheDocument()
  })

  it('sits on a deep-purple hero with a mountain illustration band', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section#home')
    expect(section).toHaveClass('bg-gradient-to-b')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('submits the search form without navigating away', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByPlaceholderText('Find your domain'), 'example.com')
    await user.click(screen.getByRole('button', { name: /search/ }))

    expect(screen.getByPlaceholderText('Find your domain')).toHaveValue('example.com')
  })
})
