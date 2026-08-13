import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with titles and blurbs', () => {
    render(<Services />)

    for (const title of ['Senior Team', 'For Kids', 'Football Schools', 'Basic Tactics']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(4)
  })

  it('renders the gradient definition and gradient-stroked icons', () => {
    const { container } = render(<Services />)
    expect(container.querySelector('linearGradient#kickoff-icon-gradient')).toBeInTheDocument()
    const icons = container.querySelectorAll('article svg')
    expect(icons).toHaveLength(4)
    expect(icons[0]?.getAttribute('class')).toContain('kickoff-icon-gradient')
  })
})
