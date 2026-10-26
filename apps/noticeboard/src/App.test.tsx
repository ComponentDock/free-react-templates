import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { NOTICES } from './data/alerts'

describe('Noticeboard — one panel, four severities, no behaviour', () => {
  it('prints the three-line head under the page’s only h1', () => {
    render(<App />)

    expect(screen.getByText('Ledgerly · Billing')).toBeInTheDocument()
    expect(screen.getByText('Ledgerly · Billing').getAttribute('class')).toContain('uppercase')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Invoices and payments')

    expect(
      screen.getByText(
        'Account notices for September. Messages that need action stay here until they are resolved.',
      ),
    ).toBeInTheDocument()
  })

  it('labels the single section with the h1', () => {
    const { container } = render(<App />)
    const section = container.querySelector('section') as HTMLElement
    const heading = screen.getByRole('heading', { level: 1 })

    expect(section).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading.id).toBeTruthy()
  })

  it('renders the four notices in severity order inside that section', () => {
    const { container } = render(<App />)
    const section = container.querySelector('section') as HTMLElement
    const cards = Array.from(section.querySelectorAll('[data-severity]'))

    expect(cards.map((card) => card.getAttribute('data-severity'))).toEqual([
      'info',
      'success',
      'warning',
      'danger',
    ])
    expect(screen.getAllByRole('status')).toHaveLength(3)
    expect(screen.getByRole('alert')).toHaveTextContent(NOTICES[3].title)
  })

  it('is a single centred column with the clamp gutter', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main') as HTMLElement
    const mainClass = main.getAttribute('class') ?? ''
    const section = container.querySelector('section') as HTMLElement
    const sectionClass = section.getAttribute('class') ?? ''

    expect(mainClass).toContain('min-h-screen')
    expect(mainClass).toContain('items-center')
    expect(mainClass).toContain('px-4')
    expect(mainClass).toContain('py-[clamp(24px,7vw,88px)]')
    expect(sectionClass).toContain('max-w-[680px]')
    expect(sectionClass).toContain('gap-[14px]')
    expect(sectionClass).toContain('content-start')
  })

  it('keeps the head 28 px off the first alert: its own margin plus the grid gap', () => {
    const { container } = render(<App />)
    const header = container.querySelector('header') as HTMLElement

    expect(header.getAttribute('class')).toContain('mb-[14px]')
    expect(container.querySelector('section')?.getAttribute('class')).toContain('gap-[14px]')
  })

  it('adds no control and no script — nothing is clickable, nothing fires', () => {
    const { container } = render(<App />)
    const section = container.querySelector('section') as HTMLElement

    expect(section.querySelectorAll('a')).toHaveLength(0)
    expect(section.querySelectorAll('button')).toHaveLength(0)
    expect(section.querySelectorAll('input')).toHaveLength(0)
    expect(section.querySelectorAll('form')).toHaveLength(0)
    expect(container.querySelectorAll('script')).toHaveLength(0)
    expect(screen.queryAllByRole('heading')).toHaveLength(1)
  })

  it('ends on the Component Dock attribution line', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main') as HTMLElement
    const footer = main.lastElementChild as HTMLElement

    expect(footer.tagName).toBe('FOOTER')
    expect(footer.querySelector('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
