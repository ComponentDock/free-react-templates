import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<App />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('renders the instagram feed section', () => {
    render(<App />)
    expect(screen.getByTestId('instagram-feed')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders sections in correct order', () => {
    render(<App />)
    const navbar = screen.getByTestId('navbar')
    const hero = screen.getByTestId('hero')
    const gallery = screen.getByTestId('gallery')
    const instagram = screen.getByTestId('instagram-feed')
    const footer = screen.getByTestId('footer')
    expect(navbar.compareDocumentPosition(hero) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(hero.compareDocumentPosition(gallery) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      gallery.compareDocumentPosition(instagram) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      instagram.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
