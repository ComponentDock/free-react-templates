import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ARTICLES } from '../content'
import { ArticleCard } from './ArticleCard'

const [first, second, third] = ARTICLES

describe('ArticleCard', () => {
  it('has no plate at all — the card surface is transparent', () => {
    const { container } = render(<ArticleCard article={first!} />)
    const card = container.firstElementChild!

    expect(card.tagName).toBe('ARTICLE')
    expect(card).toHaveClass('relative', 'flex', 'flex-col', 'text-[15px]', 'leading-[1.6]', 'text-ink')
    expect(card).not.toHaveClass('bg-white', 'border', 'rounded-[14px]', 'shadow-md')
  })

  it('sets one hue per card as --chip, from the theme tokens', () => {
    const { container: blue } = render(<ArticleCard article={first!} />)
    const { container: green } = render(<ArticleCard article={second!} />)
    const { container: magenta } = render(<ArticleCard article={third!} />)

    expect((blue.firstElementChild as HTMLElement).style.getPropertyValue('--chip')).toBe(
      'var(--color-chip-blue)',
    )
    expect((green.firstElementChild as HTMLElement).style.getPropertyValue('--chip')).toBe(
      'var(--color-chip-green)',
    )
    expect((magenta.firstElementChild as HTMLElement).style.getPropertyValue('--chip')).toBe(
      'var(--color-chip-magenta)',
    )
  })

  it('clips the photograph with a 14px radius on a 16:10 cover', () => {
    const { container } = render(<ArticleCard article={first!} />)
    const cover = container.querySelector('article > div')! as HTMLElement

    expect(cover).toHaveClass('relative', 'aspect-[16/10]', 'overflow-hidden', 'rounded-[14px]', 'bg-media')
    expect(cover).toContainElement(screen.getByRole('img'))

    const image = screen.getByRole('img')
    expect(image).toHaveClass('card-photo', 'block', 'h-full', 'w-full', 'object-cover')
    expect(image).toHaveAttribute('width', '800')
    expect(image).toHaveAttribute('height', '500')
  })

  it('insets the body 2px and keeps the meta strip flush', () => {
    const { container } = render(<ArticleCard article={first!} />)
    const body = container.querySelector('article > div:nth-of-type(2)')! as HTMLElement

    expect(body).toHaveClass('flex-1', 'px-[2px]', 'pt-[18px]')
    expect(body).toContainElement(screen.getByRole('heading', { level: 2 }))
    expect(container.querySelector('article > footer')).not.toHaveClass('px-[2px]')
  })

  it('renders a serif 22px headline that is the card’s only anchor', () => {
    render(<ArticleCard article={first!} />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass(
      'font-serif',
      'text-[22px]',
      'font-semibold',
      'leading-[1.25]',
      'tracking-[-0.01em]',
      'm-0',
      'mb-[10px]',
    )

    const anchors = screen.getAllByRole('link')
    expect(anchors).toHaveLength(1)
    expect(anchors[0]).toHaveAttribute('href', '#post-1')
    expect(anchors[0]).toHaveClass('card-link')
    expect(anchors[0]!.textContent).toBe(first!.title)
  })

  it('prints the excerpt unclamped in the muted ink', () => {
    render(<ArticleCard article={second!} />)

    const excerpt = screen.getByText(second!.excerpt)
    expect(excerpt.tagName).toBe('P')
    expect(excerpt).toHaveClass('m-0', 'text-muted')
    expect(excerpt.className).not.toContain('line-clamp')
  })

  it('marks the card with its own fragment id', () => {
    const { container } = render(<ArticleCard article={third!} />)

    expect(container.firstElementChild).toHaveAttribute('id', 'post-3')
  })
})
