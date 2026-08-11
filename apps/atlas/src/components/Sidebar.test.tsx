import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
  aboutHeading,
  aboutParagraph,
  sidebarLabel,
  socialLabels,
  socialOrder,
  stayConnectedHeading,
  todaysPick,
  todaysPickHeading,
  topStories,
  topStoriesHeading,
} from '../data'

describe('Sidebar', () => {
  it('renders the About widget with a paragraph', () => {
    render(<Sidebar />)
    expect(screen.getByRole('complementary', { name: sidebarLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: aboutHeading })).toBeInTheDocument()
    expect(screen.getByText(aboutParagraph)).toBeInTheDocument()
  })

  it('lists five top stories with widget-size thumbs', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: topStoriesHeading })).toBeInTheDocument()
    topStories.forEach((post) => {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: post.title })).toHaveAttribute(
        'src',
        expect.stringContaining('/70/70'),
      )
    })
  })

  it('renders six circular social links', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: stayConnectedHeading })).toBeInTheDocument()
    socialOrder.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })
  })

  it('renders Today’s Pick as a shadowless featured post', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: todaysPickHeading })).toBeInTheDocument()
    const heading = screen.getByRole('heading', { name: todaysPick.title })
    expect(heading).toBeInTheDocument()
    expect(heading.closest('article')).not.toHaveClass('shadow-[0_2px_8px_rgba(0,0,0,0.15)]')
  })
})
