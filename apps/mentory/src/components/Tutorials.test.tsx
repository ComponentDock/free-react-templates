import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tutorials } from './Tutorials'
import { tutorials, sidebarItems } from '../data'

describe('Tutorials', () => {
  it('renders the search form with a placeholder and a Search button', () => {
    render(<Tutorials />)
    const input = screen.getByLabelText('Search subjects')
    expect(input).toHaveAttribute('placeholder', 'Search subjects')
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('shows an error when submitting an empty search', async () => {
    const user = userEvent.setup()
    render(<Tutorials />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a subject to search.')
  })

  it('shows a status message when searching a subject', async () => {
    const user = userEvent.setup()
    render(<Tutorials />)
    await user.type(screen.getByLabelText('Search subjects'), 'React')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByRole('status')).toHaveTextContent('Searching tutorials for "React"...')
  })

  it('renders the share row with three social buttons', () => {
    render(<Tutorials />)
    expect(screen.getByText('Share:')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on linkedin' })).toBeInTheDocument()
  })

  it('renders the Latest heading and four tutorial cards with titles, meta and View buttons', () => {
    const { container } = render(<Tutorials />)
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tutorials' })).toBeInTheDocument()
    const list = container.querySelector('div.lg\\:col-span-8') as HTMLElement | null
    expect(list).not.toBeNull()
    for (const tutorial of tutorials) {
      expect(within(list!).getByRole('heading', { name: tutorial.title })).toBeInTheDocument()
      expect(within(list!).getByText(tutorial.meta)).toBeInTheDocument()
    }
    expect(within(list!).getAllByRole('link', { name: 'View' })).toHaveLength(tutorials.length)
  })

  it('renders circular pagination with page 1 active and links for 2-5', () => {
    render(<Tutorials />)
    const nav = screen.getByRole('navigation', { name: 'Tutorial pages' })
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    for (const page of [2, 3, 4, 5]) {
      expect(screen.getByRole('link', { name: `Page ${page}` })).toBeInTheDocument()
    }
  })

  it('renders the sidebar with three horizontal-thumbnail cards', () => {
    const { container } = render(<Tutorials />)
    const sidebar = container.querySelector('aside')
    expect(sidebar).not.toBeNull()
    expect(sidebar!.querySelectorAll('article')).toHaveLength(sidebarItems.length)
    expect(sidebar!.querySelectorAll('h3')).toHaveLength(sidebarItems.length)
    expect(sidebar!.querySelectorAll('img')).toHaveLength(sidebarItems.length)
  })
})
