import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Approach } from './Approach'
import { approach } from '../data'

describe('Approach', () => {
  it('renders the intro row with title, text and Learn More link', () => {
    render(<Approach />)
    const intro = screen.getByRole('heading', { name: 'We Are The Best Consulting Agency' })
    expect(intro).toBeInTheDocument()
    expect(within(intro.parentElement!).getByText(approach.introText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })

  it('renders the three numbered approach steps', () => {
    render(<Approach />)
    expect(screen.getByRole('heading', { name: /^Our Approach$/ })).toBeInTheDocument()

    for (const step of approach.steps) {
      const heading = screen.getByRole('heading', {
        name: new RegExp(`^${step.number}\\.\\s*${step.title}$`),
      })
      expect(within(heading.parentElement!).getByText(step.text)).toBeInTheDocument()
    }
  })
})
