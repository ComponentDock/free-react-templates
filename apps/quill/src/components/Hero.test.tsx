import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, meta counts, author and publication date', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /A Discount Toner Cartridge Is Better Than Ever\./,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(`${hero.likes} Likes`)).toBeInTheDocument()
    expect(screen.getByText(`${hero.comments} Comments`)).toBeInTheDocument()
    expect(screen.getByText(hero.author)).toBeInTheDocument()
    expect(screen.getByText(hero.date)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: hero.imageAlt })).toBeInTheDocument()
  })
})
