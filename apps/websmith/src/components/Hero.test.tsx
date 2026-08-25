import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Websmith Web Studio/i }),
    ).toBeInTheDocument()
  })

  it('renders the sub-text and description', () => {
    render(<Hero />)
    expect(screen.getByText(/We are web studio in New York/i)).toBeInTheDocument()
    expect(screen.getByText(/Crafting exceptional digital experiences/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Start a project/i })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })

  it('renders the slider image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Modern web development workspace/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('cycles through slides with prev/next buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(
      screen.getByRole('img', { name: /Modern web development workspace/i }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('img', { name: /Creative design studio/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('img', { name: /Digital agency team collaboration/i }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('img', { name: /Modern web development workspace/i }),
    ).toBeInTheDocument()
  })

  it('cycles backward with the previous button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('img', { name: /Digital agency team collaboration/i }),
    ).toBeInTheDocument()
  })

  it('renders prev and next navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('renders the hero section with home-section id', () => {
    render(<Hero />)
    expect(document.getElementById('home-section')).toBeInTheDocument()
  })
})
