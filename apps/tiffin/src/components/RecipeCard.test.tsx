import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { RECIPES } from '../data/recipes'
import { RecipeCard } from './RecipeCard'

const first = RECIPES[0]!

describe('RecipeCard', () => {
  it('reads top to bottom as a menu entry: plate, course, title, blurb, stats, tags', () => {
    render(<RecipeCard recipe={first} eager />)

    const card = screen.getByRole('article')
    expect(card).toHaveAttribute('id', 'margherita')
    expect([...card.children].map((child) => child.tagName)).toEqual(['DIV', 'P', 'H2', 'P', 'DL', 'UL'])

    expect(card.className).toContain('group')
    expect(card.className).toContain('relative')
    expect(card.className).toContain('flex')
    expect(card.className).toContain('flex-col')
    expect(card.className).toContain('rounded-card')
    expect(card.className).toContain('bg-white')
    expect(card.className).toContain('px-[26px]')
    expect(card.className).toContain('pt-[116px]')
    expect(card.className).toContain('pb-6')
    expect(card.className).toContain('text-center')
    expect(card.className).toContain('text-[15px]')
    expect(card.className).toContain('leading-[1.5]')
    expect(card.className).toContain('text-ink')
    expect(card.className).toContain('shadow-card')
  })

  it('keeps the card unclipped and paints the band as a 92 px pseudo-element', () => {
    render(<RecipeCard recipe={first} eager />)

    const card = screen.getByRole('article')
    expect(card.className).toContain('overflow-visible')
    expect(card.className).not.toContain('overflow-hidden')
    expect(card.className).toContain('before:absolute')
    expect(card.className).toContain('before:inset-x-0')
    expect(card.className).toContain('before:top-0')
    expect(card.className).toContain('before:h-[92px]')
    expect(card.className).toContain('before:rounded-t-[28px]')
    expect(card.className).toContain('before:bg-[var(--tint)]')
    expect(card.className).toContain("before:content-['']")
  })

  it('drives the band and the pills from one per-card tint', () => {
    const { rerender } = render(<RecipeCard recipe={first} eager />)
    expect(screen.getByRole('article').getAttribute('style')).toContain(
      '--tint: var(--color-tint-peach)',
    )

    rerender(<RecipeCard recipe={RECIPES[1]!} eager />)
    expect(screen.getByRole('article').getAttribute('style')).toContain(
      '--tint: var(--color-tint-sage)',
    )
  })

  it('floats a 176 px plate 76 px above the card with an 8 px white ring', () => {
    render(<RecipeCard recipe={first} eager />)

    const plate = screen.getByRole('article').children[0]!
    expect(plate.className).toContain('absolute')
    expect(plate.className).toContain('top-[-76px]')
    expect(plate.className).toContain('left-1/2')
    expect(plate.className).toContain('-translate-x-1/2')
    expect(plate.className).toContain('h-[176px]')
    expect(plate.className).toContain('w-[176px]')
    expect(plate.className).toContain('overflow-hidden')
    expect(plate.className).toContain('rounded-full')
    expect(plate.className).toContain('border-8')
    expect(plate.className).toContain('border-white')
    expect(plate.className).toContain('shadow-plate')
    expect(plate.className).toContain('transition-[rotate]')
    expect(plate.className).toContain('duration-[600ms]')
    expect(plate.className).toContain('ease-[cubic-bezier(.2,.7,.2,1)]')
    expect(plate.className).toContain('group-hover:rotate-12')
    expect(plate.className).toContain('motion-reduce:transition-none')
    expect(plate.className).toContain('motion-reduce:group-hover:rotate-0')
  })

  it('crops a 700 × 520 photograph into the plate with object-cover', () => {
    render(<RecipeCard recipe={first} eager />)

    const image = screen.getByRole('img') as HTMLImageElement
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/tiffin-1/700/520')
    expect(image).toHaveAttribute('alt', first.image.alt)
    expect(image.getAttribute('alt')).not.toBe('')
    expect(image).toHaveAttribute('width', '700')
    expect(image).toHaveAttribute('height', '520')
    expect(image.className).toContain('block')
    expect(image.className).toContain('h-full')
    expect(image.className).toContain('w-full')
    expect(image.className).toContain('object-cover')
  })

  it('loads the first two photographs eagerly and the third lazily', () => {
    const { rerender } = render(<RecipeCard recipe={first} eager />)
    expect(screen.getByRole('img')).toHaveAttribute('fetchpriority', 'high')
    expect(screen.getByRole('img')).toHaveAttribute('decoding', 'sync')
    expect(screen.getByRole('img')).not.toHaveAttribute('loading')

    rerender(<RecipeCard recipe={first} eager={false} />)
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy')
    expect(screen.getByRole('img')).toHaveAttribute('decoding', 'async')
    expect(screen.getByRole('img')).not.toHaveAttribute('fetchpriority')
  })

  it('sets the course line in rust caps 116 px below the card top', () => {
    render(<RecipeCard recipe={first} eager />)

    const course = screen.getByText('Main · Italian')
    expect(course.tagName).toBe('P')
    expect(course.className).toContain('relative')
    expect(course.className).toContain('m-0')
    expect(course.className).toContain('text-[13px]')
    expect(course.className).toContain('font-bold')
    expect(course.className).toContain('tracking-[.08em]')
    expect(course.className).toContain('text-accent')
    expect(course.className).toContain('uppercase')
  })

  it('makes the serif title the card-wide link', () => {
    render(<RecipeCard recipe={first} eager />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Sheet-Pan Margherita with Crispy Basil')
    expect(heading.className).toContain('mt-1.5')
    expect(heading.className).toContain('mb-2')
    expect(heading.className).toContain('font-display')
    expect(heading.className).toContain('text-[25px]')
    expect(heading.className).toContain('leading-[1.15]')
    expect(heading.className).toContain('font-normal')

    const link = within(heading).getByRole('link')
    expect(link).toHaveAttribute('href', '/recipes/sheet-pan-margherita')
    expect(link.className).toContain('tiffin-card-link')
    expect(link.className).toContain('text-inherit')
    expect(link.className).toContain('no-underline')
    expect(link.className).toContain('after:absolute')
    expect(link.className).toContain('after:inset-0')
    expect(link.className).toContain('after:z-[1]')
    expect(link.className).toContain('after:rounded-card')
  })

  it('gives the blurb the slack so stats and tags share a baseline', () => {
    render(<RecipeCard recipe={first} eager />)

    const blurb = screen.getByText(first.blurb)
    expect(blurb.tagName).toBe('P')
    expect(blurb.className).toContain('flex-1')
    expect(blurb.className).toContain('m-0')
    expect(blurb.className).toContain('mb-[18px]')
    expect(blurb.className).toContain('text-muted')
  })

  it('draws a dashed three-cell stat table with Time, Level and Per serving', () => {
    render(<RecipeCard recipe={first} eager />)

    const table = screen.getByRole('article').querySelector('dl')!
    expect(table.className).toContain('grid')
    expect(table.className).toContain('grid-cols-3')
    expect(table.className).toContain('border-y')
    expect(table.className).toContain('border-dashed')
    expect(table.className).toContain('border-rule')
    expect(table.className).toContain('py-[14px]')
    expect(table.className).toContain('[&>div+div]:border-l')
    expect(table.className).toContain('[&>div+div]:border-dashed')
    expect(table.className).toContain('[&>div+div]:border-rule')

    expect([...table.querySelectorAll('dt')].map((term) => term.textContent)).toEqual([
      'Time',
      'Level',
      'Per serving',
    ])
    for (const term of table.querySelectorAll('dt')) {
      expect(term.className).toContain('text-[12px]')
      expect(term.className).toContain('font-semibold')
      expect(term.className).toContain('tracking-[.06em]')
      expect(term.className).toContain('text-muted')
      expect(term.className).toContain('uppercase')
    }
  })

  it('keys the level row off the field, not the cell index', () => {
    render(<RecipeCard recipe={first} eager />)

    const timeCell = screen.getByText('Time').nextElementSibling!
    const levelCell = screen.getByText('Level').nextElementSibling!
    const kcalCell = screen.getByText('Per serving').nextElementSibling!

    expect(levelCell.className).toContain('flex-row')
    expect(levelCell.className).toContain('gap-1.5')
    expect(levelCell.textContent).toContain('Medium')

    for (const cell of [timeCell, kcalCell]) {
      expect(cell.className).toContain('flex-col')
      expect(cell.className).toContain('gap-1')
      expect(cell.className).toContain('text-[15px]')
      expect(cell.className).toContain('font-bold')
    }
    expect(timeCell.textContent).toBe('45 min')
    expect(kcalCell.textContent).toBe('610 kcal')
  })

  it('lists the dish tags inside the card', () => {
    render(<RecipeCard recipe={first} eager />)

    const list = within(screen.getByRole('article')).getByRole('list', { name: 'Tags' })
    expect(within(list).getAllByRole('listitem').map((item) => item.textContent)).toEqual([
      'Vegetarian',
      'Serves 4',
    ])
  })

  it('adds no control of its own', () => {
    render(<RecipeCard recipe={first} eager />)

    expect(screen.queryAllByRole('button')).toHaveLength(0)
    expect(document.querySelectorAll('input, select, textarea')).toHaveLength(0)
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
