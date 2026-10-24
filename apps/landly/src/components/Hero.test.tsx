import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroContent, heroSpecs, image } from '../data'

describe('Hero', () => {
  it('renders the featured listing with photo, overlay, price and headline', () => {
    const { container } = render(<Hero />)
    const hero = screen.getByRole('region', { name: 'Featured property' })
    expect(hero).toHaveStyle({ backgroundImage: `url(${image('hero', 1600, 900)})` })
    expect(container.querySelector('.bg-black\\/60')).not.toBeNull()
    expect(screen.getByText(heroContent.price)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroContent.headline)
  })

  it('renders the address and the three spec values', () => {
    render(<Hero />)
    expect(screen.getByText(heroContent.address)).toBeInTheDocument()
    expect(screen.getByText('2911 Sq Ft.')).toBeInTheDocument()
    expect(screen.getAllByText('2')).toHaveLength(2)
    expect(heroSpecs).toHaveLength(3)
  })

  it('links the Learn More CTA to the properties section', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: heroContent.cta })).toHaveAttribute(
      'href',
      '#properties',
    )
  })
})
