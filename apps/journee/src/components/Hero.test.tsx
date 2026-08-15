import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { heroHeadline, heroParagraph, heroSubheading } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the script subheading, headline, and paragraph', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 5, name: heroSubheading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroHeadline })).toBeInTheDocument()
    expect(screen.getByText(heroParagraph)).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })
})
