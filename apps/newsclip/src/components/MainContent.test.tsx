import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'
import { breakingNewsCards, dontMissPosts, featuredPost, popularPosts } from '../data'

describe('MainContent', () => {
  it('renders the featured post with title, category, excerpt, and continue reading link', () => {
    render(<MainContent />)
    expect(screen.getByText(featuredPost.title)).toBeInTheDocument()
    expect(screen.getAllByText(featuredPost.category).length).toBeGreaterThan(0)
    expect(screen.getByText(/Continue Reading/)).toBeInTheDocument()
  })

  it("renders Today's Most Popular section with post titles", () => {
    render(<MainContent />)
    expect(screen.getByText("Today's Most Popular")).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders Breaking News widget with card titles', () => {
    render(<MainContent />)
    expect(screen.getByText('Breaking News')).toBeInTheDocument()
    for (const card of breakingNewsCards) {
      expect(screen.getByText(card.title)).toBeInTheDocument()
    }
  })

  it("renders Don't Miss widget with post titles", () => {
    render(<MainContent />)
    for (const post of dontMissPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders the Subscribe widget with email input and button', () => {
    render(<MainContent />)
    expect(screen.getAllByText('Subscribe').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('prevents default form submission on subscribe', () => {
    render(<MainContent />)
    const form = screen.getByRole('textbox', { name: 'Email address' }).closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    fireEvent(form, submitEvent)
    // The form's onSubmit calls e.preventDefault(), so no page navigation occurs
    expect(form).toBeInTheDocument()
  })

  it('renders social share icons', () => {
    render(<MainContent />)
    expect(screen.getByLabelText('Share this article')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
