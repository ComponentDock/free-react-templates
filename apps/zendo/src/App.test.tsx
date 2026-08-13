import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  hero,
  classTypes,
  experience,
  classes,
  timetable,
  testimonials,
  stats,
  posts,
  brand,
} from './data'

describe('App', () => {
  it('renders the navbar with the brand', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: brand.name }).length).toBeGreaterThan(0)
  })

  it('renders the hero slider with the first headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.slides[0]!.heading)
  })

  it('renders the class types strip', () => {
    render(<App />)
    for (const item of classTypes) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
  })

  it('renders the Experience of Yoga split section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: experience.heading })).toBeInTheDocument()
    for (const item of experience.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
  })

  it('renders the Our Classes grid', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Classes' })).toBeInTheDocument()
    for (const item of classes) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
  })

  it('renders the class time table', () => {
    render(<App />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    for (const day of timetable.days) {
      expect(screen.getByRole('columnheader', { name: day })).toBeInTheDocument()
    }
  })

  it('renders the successful stories testimonials', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Successful Stories' }),
    ).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()
  })

  it('renders the stats band counters', () => {
    render(<App />)
    for (const stat of stats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('renders the recent posts cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Posts' })).toBeInTheDocument()
    for (const post of posts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the photo gallery', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'See the latest photos' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /gallery photo/i })).toHaveLength(8)
  })

  it('renders the footer with the Component Dock credit', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
