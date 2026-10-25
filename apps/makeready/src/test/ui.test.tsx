import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { installMockIntersectionObserver, removeMockIntersectionObserver } from './helpers'
import {
  ActionButton,
  ActionLink,
  Chip,
  MonoLabel,
  Pill,
  Reveal,
  SectionIntro,
  StatCell,
  Stars,
  TagPill,
} from '../components/ui'

afterEach(() => removeMockIntersectionObserver())

describe('Chip', () => {
  it('is a square plate by default and inverts on the dark band', () => {
    const { rerender } = render(<Chip>Selected work</Chip>)
    const chip = screen.getByText('Selected work')
    expect(chip).toHaveClass('bg-primary-900', 'text-accent-400', 'tracking-[1.8px]')
    expect(chip).not.toHaveClass('rounded-full')

    rerender(<Chip tone="inverted">What we do</Chip>)
    expect(screen.getByText('What we do')).toHaveClass('bg-accent-400', 'text-primary-900')
  })
})

describe('TagPill and Pill', () => {
  it('carries the mono tags and the rounded label', () => {
    render(
      <>
        <ul>
          <TagPill>Wordmark</TagPill>
        </ul>
        <Pill>Clients</Pill>
      </>,
    )

    expect(screen.getByText('Wordmark')).toHaveClass('font-mono', 'uppercase', 'border-primary-600')
    expect(screen.getByText('Clients')).toHaveClass('rounded-full', 'bg-primary-100')
  })
})

describe('MonoLabel', () => {
  it('adds the technical tracking and accepts an override', () => {
    render(<MonoLabel className="text-primary-500">from €14,000</MonoLabel>)
    expect(screen.getByText('from €14,000')).toHaveClass('font-mono', 'text-primary-500')
  })
})

describe('SectionIntro', () => {
  it('renders the eyebrow, heading and optional lead on a light band', () => {
    const { rerender } = render(<SectionIntro eyebrow="Selected work" title="Three projects" />)
    expect(screen.getByText('Selected work')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Three projects' })).toHaveClass(
      'text-primary-900',
    )
    expect(screen.queryByText(/With the brief/)).toBeNull()

    rerender(
      <SectionIntro
        eyebrow="What we do"
        title="Four things, properly"
        lead="We are not a full-service agency."
        tone="dark"
        chipTone="inverted"
        align="center"
        width="max-w-3xl"
      />,
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-primary-50')
    expect(screen.getByText('We are not a full-service agency.')).toHaveClass('text-primary-300')
    expect(screen.getByText('We are not a full-service agency.').parentElement).toHaveClass(
      'mx-auto',
      'text-center',
      'max-w-3xl',
    )
  })
})

describe('actions', () => {
  it('links internally by default and opens external targets safely', () => {
    const { rerender } = render(<ActionLink href="#contact">Start a project</ActionLink>)
    expect(screen.getByRole('link', { name: 'Start a project' })).toHaveAttribute(
      'href',
      '#contact',
    )

    rerender(
      <ActionLink href="https://www.componentdock.com/" variant="secondary" external>
        Component Dock
      </ActionLink>,
    )
    const external = screen.getByRole('link', { name: 'Component Dock' })
    expect(external).toHaveAttribute('target', '_blank')
    expect(external).toHaveAttribute('rel', 'noopener')
    expect(external).toHaveClass('border-gray-300')
  })

  it('renders a button that reports its own label', () => {
    let clicks = 0
    render(
      <ActionButton variant="cookieAccept" onClick={() => (clicks += 1)} ariaLabel="Accepting">
        Accept All
      </ActionButton>,
    )
    const button = screen.getByRole('button', { name: 'Accepting' })
    button.click()
    expect(clicks).toBe(1)
    expect(button).toHaveClass('bg-primary-600')
  })

  it('styles each variant it is asked for', () => {
    render(
      <>
        <ActionLink href="#work" variant="onDark">
          on dark
        </ActionLink>
        <ActionLink href="#work" variant="onDarkOutline">
          outline
        </ActionLink>
        <ActionLink href="#work" variant="outlineSm">
          outline sm
        </ActionLink>
        <ActionLink href="#work" variant="header">
          header
        </ActionLink>
      </>,
    )
    expect(screen.getByRole('link', { name: 'on dark' })).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: 'outline' })).toHaveClass('border-2')
    expect(screen.getByRole('link', { name: 'outline sm' })).toHaveClass('px-4')
    expect(screen.getByRole('link', { name: 'header' })).toHaveClass('px-5')
  })
})

describe('StatCell and Stars', () => {
  it('prints one figure over its label', () => {
    render(<StatCell value="140+" label="Identities" />)
    expect(screen.getByText('140+')).toHaveClass('font-bold')
    expect(screen.getByText('Identities')).toBeInTheDocument()
  })

  it('draws five grey stars with an accessible count', () => {
    render(<Stars />)
    expect(screen.getByLabelText('Five out of five')).toBeInTheDocument()
  })
})

describe('Reveal', () => {
  it('fades in once observed, and keeps its stagger delay', () => {
    const io = installMockIntersectionObserver()
    const { rerender } = render(
      <Reveal delay={200}>
        <p>band</p>
      </Reveal>,
    )

    const wrapper = screen.getByTestId('reveal')
    expect(wrapper).toHaveClass('opacity-0')
    expect(wrapper).toHaveAttribute('data-delay', '200')
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' })

    io.observers[0]?.trigger([{ isIntersecting: true, target: wrapper }])
    expect(wrapper).toHaveClass('opacity-100')

    rerender(
      <Reveal>
        <p>band</p>
      </Reveal>,
    )
    expect(screen.getByTestId('reveal')).toHaveAttribute('data-delay', '0')
  })
})
