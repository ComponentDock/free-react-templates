import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('fills the viewport with a dark photo background and a centered headline', () => {
    const { container } = render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toHaveAttribute('id', 'home-section')
    expect(section).toHaveClass('h-screen', 'min-h-[900px]', 'bg-hero-bg')
    expect(screen.getByRole('heading', { level: 1, name: 'Welcome To Pumply' })).toHaveClass(
      'font-black',
      'text-white',
    )
    expect(screen.getByRole('img', { name: /gym interior/i })).toBeInTheDocument()
    expect(container.querySelector('.bg-black\\/50')).toBeInTheDocument()
  })
})
