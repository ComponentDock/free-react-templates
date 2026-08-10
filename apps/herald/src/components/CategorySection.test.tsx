import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategorySection } from './CategorySection'
import { politics } from '../data'

describe('CategorySection', () => {
  it('shows the category title, lead image, headline, meta and excerpt', () => {
    render(<CategorySection category={politics} />)
    expect(screen.getByRole('heading', { name: politics.title })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: politics.lead.headline })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: politics.lead.headline })).toBeInTheDocument()
    expect(screen.getByText(politics.excerpt)).toBeInTheDocument()
  })

  it('renders four left-bordered mini headlines with meta rows', () => {
    const { container } = render(<CategorySection category={politics} />)
    const mini = politics.mini
    expect(mini).toHaveLength(4)
    for (const item of mini) {
      expect(screen.getByRole('link', { name: item.headline })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('.border-l-2')).toHaveLength(mini.length)
  })

  it('renders the divider between the lead row and the mini headlines', () => {
    const { container } = render(<CategorySection category={politics} />)
    expect(container.querySelector('.border-t')).not.toBeNull()
  })
})
