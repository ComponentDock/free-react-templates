import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroImage } from '../data'

describe('Hero', () => {
  it('renders the workspace photo as a full-bleed background with an overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: `url('${heroImage}')` })
    expect(section).toHaveClass('bg-cover', 'bg-center')
    expect(container.querySelector('.bg-black\\/30')).not.toBeNull()
  })

  it('renders the centered headline with weight-900 Hub and Tutorials', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('The Hub Of Tutorials')
    const strongs = heading.querySelectorAll('strong')
    expect(strongs).toHaveLength(2)
    expect(strongs[0]).toHaveTextContent('Hub')
    expect(strongs[1]).toHaveTextContent('Tutorials')
    expect(strongs[0]).toHaveClass('font-black')
    expect(strongs[1]).toHaveClass('font-black')
    expect(heading).toHaveClass('text-white')
  })
})
