import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { App } from './App'
import { NOTICES } from './data/notices'

const dismissButton = (title: string) => screen.getByRole('button', { name: `Dismiss: ${title}` })
const countPill = (container: HTMLElement) => container.querySelector('[data-count]') as HTMLElement
const liveRegion = (container: HTMLElement) => container.querySelector('[data-live]') as HTMLElement
const rowFor = (title: string) => screen.getByText(title).closest('li') as HTMLElement
const rows = () => screen.queryAllByRole('listitem')

const finishCollapse = (title: string) =>
  fireEvent.transitionEnd(rowFor(title), { propertyName: 'grid-template-rows' })

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  act(() => {
    vi.runOnlyPendingTimers()
  })
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('Allclear — one glass panel, four dismissible notices', () => {
  it('prints the project head, the sub-line and the count pill', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Project Atlas')
    expect(screen.getAllByRole('heading')).toHaveLength(1)
    expect(screen.getByText('Mobile app redesign · Sprint 14 of 18')).toBeInTheDocument()
    expect(countPill(container).textContent).toBe('4')
    expect(countPill(container).parentElement?.textContent).toBe('4 notices')
  })

  it('labels its single section with the h1', () => {
    const { container } = render(<App />)
    const section = container.querySelector('section') as HTMLElement

    expect(section).toHaveAttribute('aria-labelledby', 'allclear-title')
    expect(screen.getByRole('heading', { level: 1 })).toHaveAttribute('id', 'allclear-title')
    expect(screen.getByRole('heading', { level: 1 })).toHaveAttribute('tabindex', '-1')
  })

  it('is a 676 px glass panel over a 620 px content column, on a two-bloom ground', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main') as HTMLElement
    const section = container.querySelector('section') as HTMLElement
    const mainClass = main.getAttribute('class') ?? ''
    const sectionClass = section.getAttribute('class') ?? ''

    expect(mainClass).toContain('min-h-screen')
    expect(mainClass).toContain('py-[clamp(24px,7vw,88px)]')
    expect(mainClass).toContain('radial-gradient(50%_45%_at_10%_0%')
    expect(sectionClass).toContain('max-w-[676px]')
    expect(sectionClass).toContain('p-7')
    expect(sectionClass).toContain('bg-white/[.72]')
    expect(sectionClass).toContain('compact:p-[20px_16px]')
  })

  it('prints the four notices in tone order with three status roles and one alert', () => {
    const { container } = render(<App />)
    const list = screen.getByRole('list', { name: 'Project notices' })

    expect(list.querySelectorAll('li')).toHaveLength(4)
    expect(
      Array.from(container.querySelectorAll('[data-tone]')).map((row) =>
        row.getAttribute('data-tone'),
      ),
    ).toEqual(['violet', 'green', 'amber', 'rose'])
    // three row regions plus the one narration region
    expect(screen.getAllByRole('status')).toHaveLength(4)
    expect(screen.getByRole('alert')).toHaveTextContent('Storage almost full')
  })

  it('dismisses a row immediately: count, narration and focus all move first', () => {
    vi.useFakeTimers()
    const { container } = render(<App />)

    fireEvent.click(dismissButton(NOTICES[0].title))

    expect(countPill(container).textContent).toBe('3')
    expect(countPill(container).parentElement?.textContent).toBe('3 notices')
    expect(liveRegion(container).textContent).toBe(
      'Dismissed "Design review moved to Thursday". 3 notices left.',
    )
    expect(rowFor(NOTICES[0].title)).toHaveClass('is-leaving')
    expect(document.activeElement).toBe(dismissButton(NOTICES[1].title))
    expect(screen.getByRole('button', { name: 'Show dismissed notices' })).toBeInTheDocument()
  })

  it('removes the row when the grid track finishes collapsing', () => {
    vi.useFakeTimers()
    const { container } = render(<App />)

    fireEvent.click(dismissButton(NOTICES[0].title))
    finishCollapse(NOTICES[0].title)

    expect(screen.queryByText(NOTICES[0].title)).toBeNull()
    expect(rows()).toHaveLength(3)
    expect(countPill(container).textContent).toBe('3')

    // the 600 ms fallback is still armed; it must not resurrect anything
    act(() => {
      vi.advanceTimersByTime(600)
    })
    expect(rows()).toHaveLength(3)
  })

  it('removes the row on the 600 ms fallback when no transition ends', () => {
    vi.useFakeTimers()
    render(<App />)

    fireEvent.click(dismissButton(NOTICES[1].title))
    expect(rows()).toHaveLength(4)

    act(() => {
      vi.advanceTimersByTime(600)
    })

    expect(rows()).toHaveLength(3)
    expect(screen.queryByText(NOTICES[1].title)).toBeNull()
  })

  it('focuses the row above when the last row leaves', () => {
    vi.useFakeTimers()
    render(<App />)

    fireEvent.click(dismissButton(NOTICES[3].title))

    expect(document.activeElement).toBe(dismissButton(NOTICES[2].title))
  })

  it('drops the row synchronously under reduced motion', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)
    const { container } = render(<App />)

    fireEvent.click(dismissButton(NOTICES[0].title))

    expect(rows()).toHaveLength(3)
    expect(countPill(container).textContent).toBe('3')
    expect(liveRegion(container).textContent).toContain('3 notices left.')
    expect(document.activeElement).toBe(dismissButton(NOTICES[1].title))
  })

  it('singularises the pill at one notice', () => {
    vi.useFakeTimers()
    const { container } = render(<App />)

    for (const notice of NOTICES.slice(0, 3)) {
      fireEvent.click(dismissButton(notice.title))
      finishCollapse(notice.title)
    }

    expect(countPill(container).parentElement?.textContent).toBe('1 notice')
    expect(liveRegion(container).textContent).toBe(
      'Dismissed "Two tasks are past their due date". 1 notice left.',
    )
  })

  it('empties into the dashed all-caught-up box and restores everything', () => {
    vi.useFakeTimers()
    const { container } = render(<App />)

    for (const notice of NOTICES) {
      fireEvent.click(dismissButton(notice.title))
      finishCollapse(notice.title)
    }

    expect(rows()).toHaveLength(0)
    expect(countPill(container).parentElement?.textContent).toBe('0 notices')
    expect(screen.getByText('You are all caught up.')).toBeInTheDocument()
    const restore = screen.getByRole('button', { name: 'Show dismissed notices' })
    expect(document.activeElement).toBe(restore)

    fireEvent.click(restore)

    expect(rows()).toHaveLength(4)
    expect(countPill(container).textContent).toBe('4')
    expect(liveRegion(container).textContent).toBe('All notices restored.')
    expect(screen.queryByText('You are all caught up.')).toBeNull()
    expect(screen.queryByRole('button', { name: 'Show dismissed notices' })).toBeNull()
    expect(document.activeElement).toBe(dismissButton(NOTICES[0].title))
  })

  it('keeps one live region, empty until something happens', () => {
    const { container } = render(<App />)

    expect(liveRegion(container).textContent).toBe('')
    expect(container.querySelectorAll('[data-live]')).toHaveLength(1)
  })

  it('ends on the Component Dock line and adds no other control', () => {
    const { container } = render(<App />)
    const links = container.querySelectorAll('a')
    const link = container.querySelector('a') as HTMLAnchorElement

    expect(links).toHaveLength(1)
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link.textContent).toBe('Component Dock')
    expect(container.querySelectorAll('form, input, textarea, img')).toHaveLength(0)
    expect(screen.queryByRole('button', { name: 'Show dismissed notices' })).toBeNull()
  })
})
