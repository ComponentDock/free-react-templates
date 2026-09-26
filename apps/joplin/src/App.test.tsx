import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Joplin — Personal Portfolio Template')
  })

  it('renders the header', () => {
    render(<App />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('renders the experience section', () => {
    render(<App />)
    expect(screen.getByTestId('experience')).toBeInTheDocument()
  })

  it('renders the education section', () => {
    render(<App />)
    expect(screen.getByTestId('education')).toBeInTheDocument()
  })

  it('renders the expertise section', () => {
    render(<App />)
    expect(screen.getByTestId('expertise')).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<App />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<App />)
    expect(screen.getByTestId('cta')).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<App />)
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders 10 sections in correct order', () => {
    render(<App />)
    const sections = screen.getAllByTestId(
      /header|hero|about|experience|education|expertise|gallery|cta|contact|footer/,
    )
    expect(sections.length).toBe(10)
  })
})
