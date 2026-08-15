import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and six feature cards', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Everything Your Business Needs' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
    expect(screen.getByText('Reliable Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('Lightning Performance')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders an icon in every card', () => {
    const { container } = render(<Features />)
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(6)
  })

  it('sits inside a section with the features id', () => {
    const { container } = render(<Features />)
    const section = container.querySelector('section#features')
    expect(section).not.toBeNull()
    expect(within(section as HTMLElement).getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
