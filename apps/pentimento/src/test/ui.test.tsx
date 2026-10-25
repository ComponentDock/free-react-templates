import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  ActionButton,
  ActionLink,
  Badge,
  Eyebrow,
  Reveal,
  SectionHeading,
  StatusDot,
} from '../components/ui'
import { installMedia, installMockIntersectionObserver, removeMockIntersectionObserver } from './helpers'

describe('Eyebrow', () => {
  it('is rosewood on the light bands and rose on the dark one', () => {
    const { rerender } = render(<Eyebrow>Selected works</Eyebrow>)
    expect(screen.getByText('Selected works')).toHaveClass('text-accent-700', 'uppercase')

    rerender(<Eyebrow tone="dark">Exhibitions</Eyebrow>)
    expect(screen.getByText('Exhibitions')).toHaveClass('text-accent-400')
  })
})

describe('SectionHeading', () => {
  it('sets an eyebrow, a serif title and a lead', () => {
    render(<SectionHeading eyebrow="Selected works" title="Recent paintings" lead="A lead" />)

    expect(screen.getByText('Selected works')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('font-serif', 'font-medium')
    expect(screen.getByText('A lead')).toBeInTheDocument()
  })

  it('returns to the sans for the questions band', () => {
    render(<SectionHeading sans title="Before you write" lead="Practical" />)

    expect(screen.queryByText('Selected works')).toBeNull()
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('font-sans', 'font-bold')
  })

  it('drops the lead and inverts on the dark band', () => {
    render(<SectionHeading tone="dark" eyebrow="Exhibitions" title="Where the work has been" />)

    expect(screen.getByText('Exhibitions')).toHaveClass('text-accent-400')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-primary-100')
    expect(screen.queryByText('A lead')).toBeNull()
  })
})

describe('ActionLink and ActionButton', () => {
  it('opens external links safely and leaves internal ones in place', () => {
    const { rerender } = render(<ActionLink href="#works">Works</ActionLink>)
    expect(screen.getByRole('link', { name: 'Works' })).not.toHaveAttribute('target')

    rerender(
      <ActionLink href="https://www.componentdock.com/" external>
        Component Dock
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute('rel', 'noopener')
  })

  it('fires its action and carries an optional label', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <ActionButton onClick={onClick} ariaLabel="Back to top" variant="squareOutline">
        Top
      </ActionButton>,
    )

    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('rounded-none')
    await user.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('Badge and StatusDot', () => {
  it('draws both pill grounds', () => {
    const { rerender } = render(<Badge>Studio, Refshaleøen</Badge>)
    expect(screen.getByText('Studio, Refshaleøen')).toHaveClass('bg-primary-50', 'rounded-full')

    rerender(<Badge tone="solid">Practical questions</Badge>)
    expect(screen.getByText('Practical questions')).toHaveClass('bg-primary-100')
  })

  it('colours the dot by status', () => {
    const { rerender } = render(<StatusDot status="Available" />)
    expect(screen.getByText('Available')).toHaveClass('text-accent-700', 'font-medium')

    rerender(<StatusDot status="Reserved" />)
    expect(screen.getByText('Reserved')).toHaveClass('text-primary-500')
  })
})

describe('Reveal', () => {
  it('is visible where IntersectionObserver is missing, and keeps its stagger', () => {
    installMedia({ reduce: false })
    render(
      <Reveal delay={200}>
        <span>Child</span>
      </Reveal>,
    )

    const wrapper = screen.getByTestId('reveal')
    expect(wrapper).toHaveAttribute('data-delay', '200')
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' })
    expect(wrapper).toHaveClass('opacity-100', 'translate-y-0')
  })

  it('stays out of sight until it has been observed', () => {
    installMedia({ reduce: false })
    installMockIntersectionObserver()
    render(<Reveal>Child</Reveal>)

    expect(screen.getByTestId('reveal')).toHaveClass('opacity-0', 'translate-y-5')
    removeMockIntersectionObserver()
  })

  it('defaults to no delay and no motion under a reduced-motion preference', () => {
    installMedia({ reduce: true })
    render(<Reveal>Child</Reveal>)

    const wrapper = screen.getByTestId('reveal')
    expect(wrapper).toHaveAttribute('data-delay', '0')
    expect(wrapper).toHaveClass('motion-reduce:transition-none', 'opacity-100')
  })
})
