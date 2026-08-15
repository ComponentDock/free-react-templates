import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { heroImage, heroText, heroTitle, playButtonLabel } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, sub-line, and circular play button', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroText)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: playButtonLabel })).toBeInTheDocument()
    expect(screen.getByText(playButtonLabel)).toBeInTheDocument()

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', heroImage)
    expect(image).toHaveAttribute('alt', '')
  })
})
