import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { categories, popularPosts, tags } from '../data'

describe('Sidebar', () => {
  it('renders the search box with placeholder and updates on typing', () => {
    render(<Sidebar />)
    const input = screen.getByRole('searchbox')
    expect(input).toHaveAttribute('placeholder', 'Type a keyword and hit enter')
    fireEvent.change(input, { target: { value: 'design' } })
    expect(input).toHaveValue('design')
  })

  it('submits the search form without reloading', () => {
    render(<Sidebar />)
    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('renders the author bio card with avatar, button and social icons', () => {
    render(<Sidebar />)
    expect(screen.getByAltText('Meagan Smith')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meagan Smith' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read my bio' })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: 'Bio social links' }).children.length).toBe(6)
  })

  it('renders three popular posts with thumbnail titles', () => {
    render(<Sidebar />)
    for (const post of popularPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders categories with counts and the first one italic', () => {
    render(<Sidebar />)
    for (const category of categories) {
      const link = screen.getByRole('link', { name: new RegExp(category.name) })
      expect(link).toHaveTextContent(String(category.count))
    }
    const first = screen.getByRole('link', { name: new RegExp(categories[0]!.name) })
    expect(first).toHaveClass('italic')
  })

  it('renders the tags cloud', () => {
    render(<Sidebar />)
    for (const tag of tags) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
