import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Dwellix — Real Estate Listing Template')
  })

  it('renders the TopHeader', () => {
    render(<App />)
    expect(screen.getByText('info@componentdock.com')).toBeInTheDocument()
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getAllByText(/DWELL/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the SearchBar', () => {
    render(<App />)
    expect(screen.getByDisplayValue('Location')).toBeInTheDocument()
  })

  it('renders the FeaturedProperties', () => {
    render(<App />)
    expect(screen.getByText(/Top New In/)).toBeInTheDocument()
  })

  it('renders the WhyChooseUs', () => {
    render(<App />)
    expect(screen.getByText('Find Your Home')).toBeInTheDocument()
  })

  it('renders the PropertyCategories', () => {
    render(<App />)
    expect(screen.getByText(/Categories By/)).toBeInTheDocument()
  })

  it('renders the CtaBanner', () => {
    render(<App />)
    expect(screen.getByText(/Download app & join now!/)).toBeInTheDocument()
  })

  it('renders the LatestNews', () => {
    render(<App />)
    expect(screen.getByText(/Latest/)).toBeInTheDocument()
  })

  it('renders the Partners', () => {
    render(<App />)
    expect(screen.getByAltText('Partner 1')).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
