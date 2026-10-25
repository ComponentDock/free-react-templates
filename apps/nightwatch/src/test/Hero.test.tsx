import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero, LicenceBar } from '../components/Hero'
import { HERO, LICENCE_FACTS } from '../content'

describe('LicenceBar', () => {
  it('carries three facts, the rating and no sticky position', () => {
    const { container } = render(<LicenceBar />)
    const bar = container.querySelector('[data-licence-bar]') as HTMLElement

    expect(bar).toHaveClass('bg-ink-800', 'text-xs')
    expect(bar).not.toHaveClass('sticky')
    expect(bar).toHaveTextContent(LICENCE_FACTS[0].lead)
    expect(bar).toHaveTextContent(LICENCE_FACTS[0].strong)
    expect(bar).toHaveTextContent(LICENCE_FACTS[2].strong)
    expect(bar).toHaveTextContent('4.7')
    expect(bar).toHaveTextContent('90+ reviews on Google (sample)')
  })
})

describe('Hero', () => {
  it('renders the argument in five columns and the estimator in seven', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#top') as HTMLElement

    expect(section).toHaveClass('bg-ink-900', 'overflow-hidden')
    expect(section.querySelector('div')).toHaveClass('bg-primary-500/10', 'blur-3xl')
    expect(container.querySelector('#proposal')).toBe(screen.getByTestId('estimate').closest('div[id]'))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(HERO.headline)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(HERO.headlineAccent)
    expect(screen.getByText(HERO.headlineAccent)).toHaveClass('text-primary-400')
  })

  it('lists the four promises with an amber tick each', () => {
    render(<Hero />)
    const items = screen.getAllByRole('listitem').filter((item) => item.textContent?.includes('proposal'))
    const promises = screen.getByText(HERO.promises[0]).closest('li') as HTMLElement

    expect(promises).toHaveClass('text-white/85')
    expect(promises.querySelector('svg')).toHaveClass('text-primary-400')
    expect(items.length).toBeGreaterThan(0)

    HERO.promises.forEach((promise) => {
      expect(screen.getByText(promise)).toBeInTheDocument()
    })
  })
})
