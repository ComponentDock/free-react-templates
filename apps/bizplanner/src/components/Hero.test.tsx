import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading with correct text', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('Hello')
    expect(heading.textContent).toContain("We're")
    expect(heading.textContent).toContain('BizPlanner')
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('Sub Head, Motto or Mission subtitle')).toBeInTheDocument()
  })

  it('renders the CTA button with correct text and link', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'See Our Projects' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#project-section')
    expect(cta).toHaveClass('uppercase')
    expect(cta).toHaveClass('border')
    expect(cta).toHaveClass('border-primary-500')
    expect(cta).toHaveClass('text-primary-500')
  })

  it('CTA button has hover classes', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'See Our Projects' })
    expect(cta).toHaveClass('hover:bg-primary-500')
    expect(cta).toHaveClass('hover:text-white')
  })

  it('section has the correct id', () => {
    render(<Hero />)
    const section = document.querySelector('#home')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'home')
  })

  it('accepts custom className', () => {
    render(<Hero className="my-class" />)
    const section = document.querySelector('#home')
    expect(section).toHaveClass('my-class')
  })

  it('has background image styling', () => {
    render(<Hero />)
    const section = document.querySelector('#home')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })

  it('has a dark overlay div', () => {
    render(<Hero />)
    const section = document.querySelector('#home')
    const overlay = section?.querySelector('.bg-black\\/70')
    expect(overlay).toBeInTheDocument()
  })
})
