import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  aboutBio,
  aboutHeading,
  aboutPhotoAlt,
  aboutSignature,
  latestPosts,
  latestPostsHeading,
  newsletterHeading,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  popularTags,
  socialLabels,
  socialLinks,
  subscribeHeading,
  tagsHeading,
} from '../data'

describe('Sidebar', () => {
  it('renders the about, subscribe, latest posts, newsletter and tags widgets', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: aboutHeading })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: aboutPhotoAlt })).toBeInTheDocument()
    expect(screen.getByText(aboutSignature)).toBeInTheDocument()
    expect(screen.getByText(aboutBio)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: subscribeHeading })).toBeInTheDocument()
    socialLinks.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: latestPostsHeading })).toBeInTheDocument()
    latestPosts.forEach((post) => {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(newsletterPlaceholder)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: tagsHeading })).toBeInTheDocument()
    popularTags.forEach((tag) => {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    })
  })

  it('shows a confirmation after subscribing to the newsletter', () => {
    render(<Sidebar />)

    fireEvent.change(screen.getByPlaceholderText(newsletterPlaceholder), {
      target: { value: 'reader@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByText(newsletterSuccess)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText(newsletterPlaceholder)).not.toBeInTheDocument()
  })
})
