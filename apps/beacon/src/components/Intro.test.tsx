import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the subtitle and heading', () => {
    render(<Intro />)
    expect(screen.getByText('Amazing studio')).toBeInTheDocument()
    expect(screen.getByText('We are so Creative')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Intro />)
    expect(screen.getByText(/Integer nec bibendum lacus/)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Intro />)
    const btn = screen.getByRole('link', { name: /read more/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#')
  })

  it('renders the intro image', () => {
    render(<Intro />)
    const img = screen.getByAltText('Creative studio work')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has the about section id', () => {
    render(<Intro />)
    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'about')
  })
})
