import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Studio } from './Studio'

describe('Studio', () => {
  it('renders the heading, a centered image with dark veil and a circular play button', () => {
    const { container } = render(<Studio />)
    expect(screen.getByRole('heading', { name: 'See Our Studio' })).toBeInTheDocument()

    const image = container.querySelector('img')!
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/fortis-9/1200/675')

    expect(container.querySelector('.bg-black\\/20')).toBeInTheDocument()

    const play = screen.getByRole('button', { name: 'Play video' })
    expect(play.className).toContain('h-[70px]')
    expect(play.className).toContain('w-[70px]')
    expect(play.className).toContain('rounded-full')
    expect(play.className).toContain('border-2')
    expect(play.className).toContain('border-white')
  })
})
