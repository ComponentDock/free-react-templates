/* oxlint-disable react/refs -- these probes exercise the hook's own ref in a test render. */
import { act, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { maxIndexFor, perViewFor, usePrefersReducedMotion, useReveal } from '../lib/motion'
import { digitsOf, isValidEmail, validateNewsletter, validateQuote } from '../lib/forms'
import { prefersReducedMotion, scrollMetrics, scrollToTop, useScrollMetrics } from '../lib/scroll'
import { applyTheme, initialTheme, THEME_KEY, useTheme } from '../lib/theme'
import { installMedia, installObserver, setScroll } from './helpers'

describe('scroll maths', () => {
  it('reads progress only when there is somewhere to scroll', () => {
    expect(scrollMetrics(0, 0, 0)).toEqual({ progress: 0, shadow: false, top: false })
    expect(scrollMetrics(500, 2000, 1000)).toEqual({ progress: 50, shadow: true, top: true })
    expect(scrollMetrics(2000, 2000, 1000).progress).toBe(100)
    expect(scrollMetrics(4000, 2000, 1000).progress).toBe(100)
  })

  it('follows the reader’s motion preference', () => {
    installMedia({ reduce: true })
    expect(prefersReducedMotion()).toBe(true)
    installMedia()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, writable: true, value: scrollTo })
    scrollToTop()
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('feeds one hook from the scroll event', () => {
    const seen: number[] = []
    function Probe() {
      const { progress } = useScrollMetrics()
      seen.push(progress)
      return null
    }
    render(<Probe />)
    setScroll(250, 2000, 1000)
    expect(seen.at(-1)).toBe(25)
    expect(seen.at(0)).toBe(0)
  })
})

describe('theme', () => {
  beforeEach(() => {
    installMedia()
    localStorage.clear()
  })

  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('prefers the stored choice, then the system preference', () => {
    expect(initialTheme()).toBe('light')
    localStorage.setItem(THEME_KEY, 'dark')
    expect(initialTheme()).toBe('dark')
    localStorage.setItem(THEME_KEY, 'nonsense')
    installMedia({ dark: true })
    expect(initialTheme()).toBe('dark')
  })

  it('applies and removes the class', () => {
    applyTheme('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    applyTheme('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('persists a toggle', () => {
    const seen: string[] = []
    function Probe() {
      const { theme, toggle } = useTheme()
      seen.push(theme)
      return (
        <button type="button" onClick={toggle}>
          toggle
        </button>
      )
    }
    render(<Probe />)
    act(() => {
      ;(document.querySelector('button') as HTMLButtonElement).click()
    })
    expect(seen.at(-1)).toBe('dark')
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')
  })
})

describe('carousel arithmetic', () => {
  it('picks the per-view from the width and never yields a negative index', () => {
    expect(perViewFor(1440)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(768)).toBe(2)
    expect(perViewFor(639)).toBe(1)
    expect(maxIndexFor(3, 3)).toBe(0)
    expect(maxIndexFor(3, 1)).toBe(2)
    expect(maxIndexFor(1, 3)).toBe(0)
  })

  it('follows a change of motion preference', () => {
    const media = installMedia()
    function Probe() {
      const reduced = usePrefersReducedMotion()
      return <span>{reduced ? 'reduced' : 'full'}</span>
    }
    const { container } = render(<Probe />)
    expect(container.textContent).toBe('full')
    media.emit(true)
    expect(container.textContent).toBe('reduced')
  })

  it('returns early when the watched node is not rendered', () => {
    const observer = installObserver()
    function Probe() {
      const reveal = useReveal()
      return <span>{reveal.visible ? 'yes' : 'no'}</span>
    }
    const { container } = render(<Probe />)
    expect(container.textContent).toBe('no')
    expect(observer.observed()).toBe(0)
  })

  it('stays hidden until the band arrives, then disconnects on unmount', () => {
    const observer = installObserver()
    function Probe() {
      const reveal = useReveal()
      return (
        <div ref={reveal.ref}>
          <span>{reveal.visible ? 'yes' : 'no'}</span>
        </div>
      )
    }
    const { container, unmount } = render(<Probe />)
    expect(container.textContent).toBe('no')
    observer.intersect()
    expect(container.textContent).toBe('yes')
    unmount()
  })
})

describe('form rules', () => {
  it('counts digits and tests addresses', () => {
    expect(digitsOf('(555) 040-0400')).toBe('5550400400')
    expect(isValidEmail('sam@example.com')).toBe(true)
    expect(isValidEmail('sam@example')).toBe(false)
  })

  it('names every missing quote field', () => {
    const errors = validateQuote({ name: ' ', phone: '', problem: '' })
    expect(errors.name).toBe('Please give a name we can reply to.')
    expect(errors.phone).toBe('A phone number we can reach you on is required.')
    expect(errors.problem).toBe('Pick the closest match so we send the right price.')
    expect(validateQuote({ name: 'Sam', phone: '555 040 0400', problem: 'Ants' })).toEqual({})
  })

  it('asks for the area code rather than repeating itself', () => {
    expect(validateQuote({ name: 'Sam', phone: '0400', problem: 'Ants' }).phone).toBe(
      'That number is too short. Include the area code.',
    )
  })

  it('checks the newsletter address', () => {
    expect(validateNewsletter('  ')).toBe('Enter the address you want the reminders sent to.')
    expect(validateNewsletter('nope')).toBe('That address looks incomplete. Check it and send again.')
    expect(validateNewsletter('sam@example.com')).toBeNull()
  })
})
