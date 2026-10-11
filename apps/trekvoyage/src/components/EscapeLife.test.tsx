import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EscapeLife } from './EscapeLife'

describe('EscapeLife', () => {
  it('renders the highlighted headline, the supporting copy and the play button', () => {
    const { container } = render(<EscapeLife />)

    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'We Travel Not To Escape Life But for Life not to Escape Us.',
    })
    const highlight = heading.querySelector('span')!
    expect(highlight.className).toContain('title-highlight')

    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs).toHaveLength(3)
    expect(paragraphs[0]!.textContent).toContain('Vokalia and Consonantia')
    expect(paragraphs[0]!.className).toContain('lg:text-right')
    expect(paragraphs[1]!.textContent).toContain('Duden')

    const cta = screen.getByRole('link', { name: 'Get started' })
    expect(cta).toHaveAttribute('href', '#offers')
    expect(cta.className).toContain('bg-brand')

    const image = container.querySelector('img')!
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/trekvoyage-about/900/600')

    const play = screen.getByRole('button', { name: 'Play video' })
    expect(play.className).toContain('rounded-full')
    expect(play.className).toContain('hover:bg-brand-alt')

    expect(container.querySelector('#about')).not.toBeNull()
  })
})
