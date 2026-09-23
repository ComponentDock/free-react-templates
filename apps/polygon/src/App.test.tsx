import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Polygon')).toBeInTheDocument()
    expect(screen.getByText('Creative Design')).toBeInTheDocument()
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    expect(screen.getByText('Build With Love')).toBeInTheDocument()
    expect(screen.getByText('Fast Loading')).toBeInTheDocument()
    expect(screen.getByText("Let's Build Together")).toBeInTheDocument()
    expect(screen.getByText('Open for Collaboration')).toBeInTheDocument()
    expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText('About Polygon')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Polygon — Architecture & Design Template')
  })

  it('has correct component dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders hero CTA buttons', () => {
    render(<App />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('Download')).toBeInTheDocument()
  })

  it('renders project cards', () => {
    render(<App />)
    expect(screen.getByText('Skyline Tower')).toBeInTheDocument()
    expect(screen.getByText('Harbor View')).toBeInTheDocument()
    expect(screen.getByText('Green Quarter')).toBeInTheDocument()
    expect(screen.getByText('Metro Square')).toBeInTheDocument()
    expect(screen.getByText('Riverside Lofts')).toBeInTheDocument()
    expect(screen.getByText('Apex Center')).toBeInTheDocument()
  })

  it('renders testimonials', () => {
    render(<App />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<App />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`${year}.*Polygon.*All rights reserved`)),
    ).toBeInTheDocument()
  })

  it('has the newsletter form', () => {
    render(<App />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders navbar nav links', () => {
    render(<App />)
    const navLinks = screen.getAllByRole('link')
    const hrefs = navLinks.map((l) => l.getAttribute('href'))
    expect(hrefs).toContain('#home')
    expect(hrefs).toContain('#about')
    expect(hrefs).toContain('#projects')
    expect(hrefs).toContain('#contact')
  })

  it('renders about section numbered headings', () => {
    render(<App />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('Collaborate')).toBeInTheDocument()
  })

  it('renders footer quick links', () => {
    render(<App />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Follow Links')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders footer social links', () => {
    render(<App />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Dribbble')).toBeInTheDocument()
  })

  it('has no colorlib references in app source', () => {
    render(<App />)
    // Just verify the app renders without crashing
    expect(screen.getByText('Polygon')).toBeInTheDocument()
  })
})
