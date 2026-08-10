import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  aboutBlurb,
  aboutHeading,
  aboutPhotoAlt,
  featuredHeading,
  featuredLarge,
  featuredList,
  followHeading,
  sidebarCategories,
  socialLabels,
  socialLinks,
  subscribeHeading,
  subscribePlaceholder,
  subscribeSuccess,
} from '../data'

describe('Sidebar', () => {
  it('renders the about, follow, featured, categories and subscribe widgets', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: aboutHeading })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: aboutPhotoAlt })).toBeInTheDocument()
    expect(screen.getByText(aboutBlurb)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: followHeading })).toBeInTheDocument()
    socialLinks.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: featuredHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: featuredLarge.title })).toBeInTheDocument()
    featuredList.forEach((post) => {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    })

    sidebarCategories.forEach((category) => {
      expect(screen.getByRole('link', { name: new RegExp(category.name) })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: subscribeHeading })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(subscribePlaceholder)).toBeInTheDocument()
  })

  it('shows a confirmation after subscribing', () => {
    render(<Sidebar />)

    fireEvent.change(screen.getByPlaceholderText(subscribePlaceholder), {
      target: { value: 'reader@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: subscribeHeading }))

    expect(screen.getByText(subscribeSuccess)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText(subscribePlaceholder)).not.toBeInTheDocument()
  })
})
