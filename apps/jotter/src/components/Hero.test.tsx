import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the circular portrait with an alt text', () => {
    render(<Hero />)
    const portrait = screen.getByRole('img', { name: 'Portrait of Jude Marlowe' })
    expect(portrait).toHaveAttribute('src', 'https://picsum.photos/seed/jotter-portrait/200/200')
    expect(portrait).toHaveClass('rounded-full')
  })

  it('shows the greeting subheading, name headline, intro paragraph and CTA', () => {
    render(<Hero />)

    const subheading = screen.getByRole('heading', { level: 2 })
    expect(subheading.textContent).toBe("Hello I'm")
    expect(subheading).toHaveClass('text-subheading')

    const name = screen.getByRole('heading', { level: 1 })
    expect(name.textContent).toBe('Jude Marlowe')
    expect(name).toHaveClass('font-black')

    expect(
      screen.getByText(/I am A Blogger\. Far far away, behind the word mountains/),
    ).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'More About Me' })
    expect(cta).toHaveAttribute('href', '#articles')
    expect(cta).toHaveClass('border-b-2')
  })
})
