import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CourseCard } from './CourseCard'
import { COURSES } from '../data/courses'

describe('CourseCard', () => {
  it('is an article that owns its in-page anchor and the card lift', () => {
    render(<CourseCard course={COURSES[0]!} />)

    const card = screen.getByRole('article')
    expect(card.id).toBe('course-1')
    expect(card.className).toContain('relative')
    expect(card.className).toContain('flex-col')
    expect(card.className).toContain('rounded-[22px]')
    expect(card.className).toContain('border-[#e6e8f0]')
    expect(card.className).toContain('p-2.5')
    expect(card.className).toContain('hover:-translate-y-[3px]')
    expect(card.className).toContain('hover:shadow-[0_20px_40px_-26px_rgba(22,26,46,.45)]')
    expect(card.className).toContain('motion-reduce:hover:translate-y-0')
    expect(card.getAttribute('style')).toContain('--accent: #4f46e5')
    expect(card.getAttribute('style')).toContain('--soft: #eef0ff')
  })

  it('crops the photograph into an honest 16:9 band with the level chip on it', () => {
    render(<CourseCard course={COURSES[0]!} />)

    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toBe('https://picsum.photos/seed/coursebook-1/700/440')
    expect(image.getAttribute('alt')).toBe('A laptop on a desk showing a code editor')
    expect(image.getAttribute('width')).toBe('700')
    expect(image.getAttribute('height')).toBe('440')
    expect(image.getAttribute('loading')).toBe('eager')
    expect(image.getAttribute('decoding')).toBe('async')
    expect(image.className).toContain('h-full')
    expect(image.className).toContain('w-full')
    expect(image.className).toContain('object-cover')

    const band = image.parentElement!
    expect(band.className).toContain('aspect-[16/9]')
    expect(band.className).toContain('rounded-2xl')
    expect(band.className).toContain('overflow-hidden')
    expect(band.className).toContain('bg-[var(--soft)]')

    const chip = screen.getByText('Intermediate')
    expect(chip.className).toContain('absolute')
    expect(chip.className).toContain('bottom-2.5')
    expect(chip.className).toContain('left-2.5')
    expect(chip.className).toContain('bg-[rgba(255,255,255,.94)]')
    expect(chip.className).toContain('text-xs')
  })

  it('makes the title the card-wide link and the only real target', () => {
    render(<CourseCard course={COURSES[0]!} />)

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(1)

    const link = screen.getByRole('link')
    expect(link.textContent).toBe('Modern CSS Layout with Grid and Container Queries')
    expect(link.getAttribute('href')).toBe('#course-1')
    expect(link.className).toContain('after:inset-0')
    expect(link.className).toContain('after:rounded-[22px]')
    expect(link.className).toContain('coursebook-card-link')

    expect(screen.queryAllByRole('button')).toHaveLength(0)
    expect(document.querySelectorAll('form, input')).toHaveLength(0)
  })

  it('prints the accent track, the instructor disc and two meta facts', () => {
    render(<CourseCard course={COURSES[0]!} />)

    const track = screen.getByText('Front-end development')
    expect(track.className).toContain('text-[var(--accent)]')
    expect(track.className).toContain('text-[13px]')
    expect(track.className).toContain('font-semibold')

    const avatar = screen.getByText('IM')
    expect(avatar.getAttribute('aria-hidden')).toBe('true')
    expect(avatar.className).toContain('size-7')
    expect(avatar.className).toContain('rounded-full')
    expect(avatar.className).toContain('bg-[var(--soft)]')
    expect(avatar.className).toContain('text-[var(--accent)]')
    expect(screen.getByText('Ines Moreau')).toBeInTheDocument()

    const facts = screen.getAllByRole('listitem')
    expect(facts.map((fact) => fact.textContent)).toEqual(['24 lessons', '6 h 40 min'])
    facts.forEach((fact) => {
      expect(fact.className).toContain('inline-flex')
      expect(fact.className).toContain('gap-1.5')
      expect(fact.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    })
  })

  it('announces the progress bar and fills it to the printed percentage', () => {
    render(<CourseCard course={COURSES[0]!} />)

    expect(screen.getByText('14 of 24 lessons')).toBeInTheDocument()
    expect(screen.getByText('58%')).toBeInTheDocument()

    const bar = screen.getByRole('progressbar')
    expect(bar.getAttribute('aria-label')).toBe(
      'Progress on Modern CSS Layout with Grid and Container Queries',
    )
    expect(bar.getAttribute('aria-valuenow')).toBe('58')
    expect(bar.getAttribute('aria-valuemin')).toBe('0')
    expect(bar.getAttribute('aria-valuemax')).toBe('100')
    expect(bar.className).toContain('h-2')
    expect(bar.className).toContain('rounded-full')
    expect(bar.className).toContain('overflow-hidden')
    expect(bar.className).toContain('bg-[var(--soft)]')
    expect(bar.hasAttribute('aria-labelledby')).toBe(false)

    const fill = bar.firstElementChild as HTMLElement
    expect(fill.style.width).toBe('58%')
    expect(fill.style.backgroundImage).toContain('linear-gradient')
    expect(fill.style.backgroundImage).toContain('rgba(255, 255, 255, 0.25)')
    expect(fill.style.backgroundSize).toBe('16px 16px')
    expect(fill.className).toContain('bg-[var(--accent)]')
    expect(fill.className).toContain('h-full')
  })

  it('pins a tinted strip under the body with the next lesson and a decorative chip', () => {
    render(<CourseCard course={COURSES[0]!} />)

    const strip = screen.getByText('Next:').closest('div')!
    expect(strip.className).toContain('mt-4')
    expect(strip.className).toContain('justify-between')
    expect(strip.className).toContain('rounded-[14px]')
    expect(strip.className).toContain('bg-[var(--soft)]')
    expect(strip.className).toContain('px-3.5')
    expect(strip.className).toContain('py-3')

    expect(screen.getByText('Subgrid for card rows').tagName).toBe('STRONG')

    const chip = screen.getByText('Resume')
    expect(chip.getAttribute('aria-hidden')).toBe('true')
    expect(chip.className).toContain('bg-[var(--accent)]')
    expect(chip.className).toContain('text-white')
    expect(chip.className).toContain('rounded-[10px]')
    expect(chip.className).toContain('group-hover:gap-2')
    expect(chip.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
  })

  it('swaps in the certificate state on the finished card', () => {
    render(<CourseCard course={COURSES[2]!} />)

    expect(screen.queryByText('Next:')).not.toBeInTheDocument()
    expect(screen.getByText('Certificate ready').tagName).toBe('STRONG')

    const award = document.querySelector('.coursebook-award')
    expect(award?.getAttribute('aria-hidden')).toBe('true')

    expect(screen.getByText('12 of 12 lessons')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
    expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('100')

    const fill = screen.getByRole('progressbar').firstElementChild as HTMLElement
    expect(fill.style.width).toBe('100%')

    const chip = screen.getByText('View')
    expect(chip.getAttribute('aria-hidden')).toBe('true')
  })
})
