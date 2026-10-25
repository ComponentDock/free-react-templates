import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Attorneys } from './Attorneys'
import { attorneys } from '../data'

/** jsdom's selector engine rejects Tailwind's slashed class names, so match on class text. */
function byClass(container: HTMLElement, token: string): HTMLElement {
  const found = Array.from(container.querySelectorAll<HTMLElement>('*')).find((element) =>
    element.className.toString().includes(token),
  )
  if (!found) {
    throw new Error(`no element carries ${token}`)
  }
  return found
}

describe('Attorneys', () => {
  it('renders one card per partner with a unique name, role and e-mail', () => {
    render(<Attorneys />)
    const section = screen
      .getByRole('heading', { level: 2, name: attorneys.heading })
      .closest('section')
    const articles = Array.from(section!.querySelectorAll('article')) as HTMLElement[]

    expect(articles).toHaveLength(attorneys.people.length)
    expect(new Set(attorneys.people.map((person) => person.email)).size).toBe(
      attorneys.people.length,
    )
    expect(new Set(attorneys.people.map((person) => person.name)).size).toBe(
      attorneys.people.length,
    )

    for (const [index, person] of attorneys.people.entries()) {
      const article = articles[index] as HTMLElement
      const name = within(article).getByRole('heading', { level: 3 })
      expect(name.textContent).toBe(person.name)
      expect(name.className).toContain('text-[22px]')
      expect(within(article).getByText(person.role)).toBeInTheDocument()
      expect(within(article).getByRole('link', { name: person.email })).toHaveAttribute(
        'href',
        `mailto:${person.email}`,
      )
    }
  })

  it('reveals the contact overlay on hover and on focus-within', () => {
    const { container } = render(<Attorneys />)
    const overlay = byClass(container, 'bg-ink/60')

    expect(overlay.className).toContain('opacity-0')
    expect(overlay.className).toContain('group-hover:opacity-100')
    expect(overlay.className).toContain('group-focus-within:opacity-100')
  })

  it('names the three social glyphs on every card', () => {
    render(<Attorneys />)

    for (const person of attorneys.people) {
      expect(screen.getByRole('link', { name: `${person.name} on Twitter` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${person.name} on Instagram` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${person.name} on Facebook` })).toBeInTheDocument()
    }
  })
})
