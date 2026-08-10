import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
  adLabel,
  editorsPickTitle,
  mostPopularTitle,
  newsletterTitle,
  socialNetworksTitle,
} from '../data'

describe('Sidebar', () => {
  it('composes the five sidebar widgets in order', () => {
    render(<Sidebar />)

    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: editorsPickTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: adLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: mostPopularTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: socialNetworksTitle })).toBeInTheDocument()
  })
})
