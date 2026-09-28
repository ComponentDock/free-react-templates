import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { blogPosts, instagramImages, footer } from '../data'

describe('Footer', () => {
  it('renders the four widget columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Latest Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders all three blog entries', () => {
    render(<Footer />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders all four Instagram images', () => {
    render(<Footer />)
    const instaImages = screen.getAllByAltText('Instagram food photo')
    expect(instaImages).toHaveLength(instagramImages.length)
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(footer.about)).toBeInTheDocument()
  })

  it('links the credit line to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the social icon links', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('keeps the newsletter form non-navigating on submit', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    const submit = screen.getByRole('button', { name: 'Subscribe' })
    expect(submit).toHaveAttribute('type', 'submit')

    fireEvent.change(input, { target: { value: 'hungry@example.com' } })
    fireEvent.click(submit)
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
  })
})
