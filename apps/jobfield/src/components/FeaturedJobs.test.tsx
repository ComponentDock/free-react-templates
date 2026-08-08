import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedJobs } from './FeaturedJobs'

describe('FeaturedJobs', () => {
  it('renders the heading and six job cards with their details', () => {
    render(<FeaturedJobs />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest Opportunities' }),
    ).toBeInTheDocument()

    for (const title of [
      'Senior React Developer',
      'Lead UX Designer',
      'Data Scientist',
      'DevOps Engineer',
      'Product Marketing Manager',
      'Financial Analyst',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    for (const company of [
      'TechFlow Inc.',
      'DesignCraft Studio',
      'DataVault Analytics',
      'CloudPeak Systems',
      'GrowthLab Marketing',
      'FinEdge Capital',
    ]) {
      expect(screen.getByText(company)).toBeInTheDocument()
    }

    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
    expect(screen.getByText('$140K–$180K')).toBeInTheDocument()
    expect(screen.getAllByText('2 days ago')).toHaveLength(2)
    expect(screen.getAllByText('Remote')).toHaveLength(2)
  })

  it('marks the first card as Featured and the rest as Full-time', () => {
    render(<FeaturedJobs />)

    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getAllByText('Full-time')).toHaveLength(5)
  })

  it('renders skill tags, Apply Now links and the section CTA links', () => {
    render(<FeaturedJobs />)

    for (const tag of ['React', 'TypeScript', 'Node.js', 'Figma', 'Terraform']) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Python')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /Apply Now/ })).toHaveLength(6)
    expect(screen.getByRole('link', { name: 'View All Jobs' })).toHaveAttribute('href', '#jobs')
    expect(screen.getByRole('link', { name: 'Browse Categories' })).toHaveAttribute(
      'href',
      '#categories',
    )
  })

  it('uses seeded placeholder images for company logos', () => {
    render(<FeaturedJobs />)

    const images = screen.getAllByRole('img', { name: /logo/ })
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/jobfield-1/96/96')
  })
})
