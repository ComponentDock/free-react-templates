import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  ActionButton,
  ActionLink,
  CheckLine,
  Kicker,
  Reveal,
  SectionIntro,
  Stars,
} from '../components/ui'
import { installObserver, installMedia } from './helpers'

afterEach(() => {
  installMedia()
})

describe('kicker and section intro', () => {
  it('renders the eyebrow in both tones', () => {
    render(
      <>
        <Kicker>Light tone</Kicker>
        <Kicker tone="dark">Dark tone</Kicker>
      </>,
    )
    expect(screen.getByText('Light tone')).toHaveClass('text-primary-700')
    expect(screen.getByText('Dark tone')).toHaveClass('text-primary-400')
  })

  it('drops the eyebrow and the lead when it has none, and can centre itself', () => {
    render(<SectionIntro title="A bare heading" align="center" />)
    const heading = screen.getByRole('heading', { level: 2, name: 'A bare heading' })
    expect(heading).toHaveClass('text-ink-800')
    expect(heading.parentElement).toHaveClass('text-center')
    expect(screen.queryByRole('paragraph')).toBeNull()
  })

  it('inverts its heading on a dark ground', () => {
    render(<SectionIntro kicker="Kicker" title="Dark band" lead="Lead copy" tone="dark" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Dark band' })).toHaveClass('text-white')
    expect(screen.getByText('Lead copy')).toHaveClass('text-white/70')
  })
})

describe('actions and marks', () => {
  it('renders every button and link variant', () => {
    render(
      <>
        <ActionButton variant="primary">Primary</ActionButton>
        <ActionButton variant="quiet">Quiet</ActionButton>
        <ActionLink variant="outline" href="#plans">
          Outline
        </ActionLink>
        <ActionLink variant="white" href="#identify">
          White
        </ActionLink>
        <ActionLink variant="outlineWhite" href="tel:+15550400400">
          Outline white
        </ActionLink>
        <ActionButton disabled>Disabled</ActionButton>
      </>,
    )
    expect(screen.getByRole('button', { name: 'Primary' })).toHaveClass('bg-primary-600')
    expect(screen.getByRole('button', { name: 'Quiet' })).toHaveClass('border-ink-200')
    expect(screen.getByRole('link', { name: 'Outline' })).toHaveAttribute('href', '#plans')
    expect(screen.getByRole('link', { name: 'White' })).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: 'Outline white' })).toHaveClass('border-white/40')
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled()
  })

  it('marks an external link so it opens safely', () => {
    render(
      <ActionLink href="https://www.componentdock.com/" external>
        Component Dock
      </ActionLink>,
    )
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('rel', 'noreferrer')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('draws five stars and a check line', () => {
    const { container } = render(
      <ul>
        <CheckLine>A promise</CheckLine>
      </ul>,
    )
    render(<Stars />)
    expect(screen.getByText('A promise')).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(1)
    expect(document.querySelectorAll('svg.fill-current')).toHaveLength(5)
  })
})

describe('reveal', () => {
  it('paints at once when no observer exists', () => {
    const original = window.IntersectionObserver
    // @ts-expect-error — the module must survive an environment without it
    delete window.IntersectionObserver
    render(<Reveal>Visible</Reveal>)
    expect(screen.getByText('Visible')).toHaveClass('opacity-100')
    window.IntersectionObserver = original
  })

  it('waits for the band to arrive, then stays', () => {
    const observer = installObserver()
    render(<Reveal delay={200}>Arriving</Reveal>)
    const wrapper = screen.getByText('Arriving')
    expect(wrapper).toHaveClass('opacity-0')
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' })
    // A band that is not in view yet stays hidden.
    observer.miss()
    expect(wrapper).toHaveClass('opacity-0')
    observer.intersect()
    expect(wrapper).toHaveClass('opacity-100')
    expect(observer.disconnected()).toBe(true)
  })

  it('skips the observer under reduced motion', () => {
    installMedia({ reduce: true })
    const observer = installObserver()
    render(<Reveal>Still</Reveal>)
    expect(observer.observed()).toBe(0)
    expect(screen.getByText('Still')).toHaveClass('opacity-100')
  })
})
