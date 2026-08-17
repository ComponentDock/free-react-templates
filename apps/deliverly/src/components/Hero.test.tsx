import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { heroImage, heroPrimaryCta, heroSecondaryCta, heroSubtitle, heroTitle } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the full-viewport hero with headline, subtext and two CTAs', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroSubtitle)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: heroPrimaryCta })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: heroSecondaryCta })).toHaveAttribute('href', '#about')

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', heroImage)
    expect(img).toHaveAttribute('alt', '')
    expect(container.querySelector('div[aria-hidden="true"]')).toBeInTheDocument()
  })
})
