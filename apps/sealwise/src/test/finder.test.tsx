import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Finder } from '../components/Finder'
import { finder, pests } from '../content'

describe('pest finder', () => {
  it('opens on ants with nine tabs and one visible panel', () => {
    render(<Finder />)
    const tabs = screen.getAllByRole('button', { name: /./ })
    expect(tabs).toHaveLength(pests.length)
    expect(screen.getByRole('button', { name: /Ants/ })).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByRole('region')
    expect(panel).toHaveAttribute('data-pest-panel', 'ants')
    expect(within(panel).getByRole('heading', { level: 3 })).toHaveTextContent('Ants')
    expect(within(panel).getByText('From $145')).toBeInTheDocument()
    expect(within(panel).getByText(finder.coveredLabel)).toBeInTheDocument()
  })

  it('switches the panel and keeps the three refusals honest', async () => {
    render(<Finder />)
    await userEvent.click(screen.getByRole('button', { name: /Termites/ }))
    const panel = screen.getByRole('region')
    expect(panel).toHaveAttribute('data-pest-panel', 'termites')
    expect(within(panel).getByText('Quoted after inspection')).toBeInTheDocument()
    expect(within(panel).getByText(finder.uncoveredLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Termites/ })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /Ants/ })).toHaveAttribute('aria-expanded', 'false')
  })

  it('covers five of the nine pests and refuses four', async () => {
    render(<Finder />)
    const covered: string[] = []
    for (const pest of pests) {
      await userEvent.click(screen.getByRole('button', { name: new RegExp(pest.label) }))
      const panel = screen.getByRole('region')
      const label = within(panel).queryByText(finder.coveredLabel, { selector: 'strong' })
        ? finder.coveredLabel
        : finder.uncoveredLabel
      covered.push(label)
      expect(within(panel).getByText(pest.price)).toBeInTheDocument()
    }
    expect(covered.filter((label) => label === finder.coveredLabel)).toHaveLength(5)
    expect(covered.filter((label) => label === finder.uncoveredLabel)).toHaveLength(4)
  })

  it('sends both CTAs somewhere that exists', () => {
    render(<Finder />)
    const panel = screen.getByRole('region')
    expect(within(panel).getByRole('link', { name: finder.ctaBook })).toHaveAttribute('href', '#quote')
    expect(within(panel).getByRole('link', { name: finder.ctaPlan })).toHaveAttribute(
      'href',
      '#plans',
    )
  })
})
