import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows an About column with a blurb and a pill Read More button', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveClass('rounded-full')
  })

  it('shows Quick Menu and Ministries link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Quick Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Ministries' })).toBeInTheDocument()
    for (const item of ['About', 'Services', 'Approach', 'Sustainability', 'News', 'Careers']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    for (const item of ['Children', 'Women', 'Bible Study', 'Church', 'Missionaries']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('shows social icons for facebook, twitter, instagram and vimeo', () => {
    render(<Footer />)
    for (const name of ['Facebook', 'Twitter', 'Instagram', 'Vimeo']) {
      expect(screen.getByRole('link', { name })).toHaveAttribute(
        'href',
        `https://${name.toLowerCase()}.com`,
      )
    }
  })

  it('links the bottom bar credit to Component Dock', () => {
    render(<Footer />)
    const bottom = screen.getByText(/All rights reserved/)
    expect(within(bottom).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
