import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { brandTitle, heroBio, heroHeadline, heroIntro, heroName } from '../data'

describe('Hero', () => {
  it('renders the giant wordmark with a hollow mid-word span', () => {
    render(<Hero />)

    const wordmark = screen.getByRole('heading', { level: 1 })
    expect(wordmark).toHaveClass('text-ink', 'font-black')
    expect(wordmark).toHaveTextContent(brandTitle)
    expect(wordmark.querySelector('.text-stroke-ink')).toHaveTextContent('nt')
  })

  it('renders the intro headline, paragraph and author card', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: heroHeadline })).toHaveClass(
      'font-light',
      'text-ink',
    )

    expect(screen.getByText(heroIntro)).toBeInTheDocument()

    const avatar = screen.getByRole('img', { name: heroName })
    expect(avatar).toHaveClass('rounded-full')

    expect(screen.getByRole('heading', { level: 3, name: heroName })).toHaveClass(
      'font-bold',
      'text-ink',
    )
    expect(screen.getByText(heroBio)).toBeInTheDocument()
  })
})
