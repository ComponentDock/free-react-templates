import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroIntro, person } from '../content'

describe('Hero', () => {
  it('renders exactly one h1 with the italic tail on the second line', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Curious mind.Work in progress.')
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)

    const italic = screen.getByText('in progress.')
    expect(italic.tagName).toBe('EM')
    expect(italic).toHaveClass('font-serif')
  })

  it('renders the availability line and the intro', () => {
    render(<Hero />)

    expect(screen.getByText(person.availability)).toBeInTheDocument()
    expect(screen.getByText(heroIntro)).toBeInTheDocument()
  })

  it('renders the in-page CTA as a link and the out-of-scope CTA as a button', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Explore my work/ })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('button', { name: /Meet the person behind it/ })).toBeInTheDocument()
  })
})
