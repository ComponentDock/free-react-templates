import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SERVICES, SERVICES_TITLE } from '../lib/site'
import { tokens } from '../test/match-media'

describe('Services', () => {
  it('runs an italic serif title over four rows, two to a column', () => {
    const { container } = render(<Services />)

    const title = screen.getByRole('heading', { level: 2, name: SERVICES_TITLE })

    expect(tokens(title)).toEqual(expect.arrayContaining(['text-[2rem]', 'italic']))
    expect(tokens(title.parentElement as Element)).toContain('mb-[30px]')
    expect(tokens(container.querySelector('.grid') as Element)).toEqual(
      expect.arrayContaining(['lg:grid-cols-2', 'lg:gap-x-[30px]']),
    )

    const rows = container.querySelectorAll('article')

    expect(rows).toHaveLength(SERVICES.length)
    expect([...rows].map((row) => row.querySelector('h3')?.textContent)).toEqual(
      SERVICES.map((service) => service.title),
    )
    expect([...rows].map((row) => tokens(row.lastElementChild as Element).includes('px-[30px]'))).toEqual([
      true,
      true,
      true,
      true,
    ])
  })

  it('gives every row a photograph, a title link and the mint wash', () => {
    const { container } = render(<Services />)

    const rows = [...container.querySelectorAll('article')]

    for (const row of rows) {
      expect(tokens(row)).toEqual(expect.arrayContaining(['flex', 'items-center', 'hover:bg-brand']))
      expect(tokens(row)).toContain('focus-within:bg-brand')
    }

    const images = [...container.querySelectorAll('img')]

    expect(images).toHaveLength(SERVICES.length)
    expect(images.every((image) => (image.getAttribute('src') ?? '').includes('picsum.photos/seed/celebrant-'))).toBe(true)
    expect(images.every((image) => (image.getAttribute('alt') ?? '').length > 0)).toBe(true)
    expect(
      rows.map((row) => row.querySelector('h3 a')?.getAttribute('class')).every((value) => value === 'text-ink'),
    ).toBe(true)
  })

  it('hands the picture to the right on the second and fourth rows only', () => {
    const { container } = render(<Services />)

    const frames = [...container.querySelectorAll('article')].map((row) => row.firstElementChild as Element)

    expect(frames.map((frame) => tokens(frame).includes('lg:order-2'))).toEqual([false, true, false, true])
    expect(frames.every((frame) => tokens(frame).includes('basis-[250px]'))).toBe(true)
  })
})
