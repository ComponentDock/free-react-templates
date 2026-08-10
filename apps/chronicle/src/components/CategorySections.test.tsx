import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategorySections } from './CategorySections'
import { foodDrinkPosts, lifestylePosts, travelPosts } from '../data'

describe('CategorySections', () => {
  it('renders the Lifestyle and Travel halves with three horizontal posts each', () => {
    render(<CategorySections />)
    expect(screen.getByRole('heading', { name: 'Lifestyle' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Travel' })).toBeInTheDocument()
    for (const post of lifestylePosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
    for (const post of travelPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the Food and Drink section with four vertical cards', () => {
    render(<CategorySections />)
    expect(screen.getByRole('heading', { name: 'Food and Drink' })).toBeInTheDocument()
    for (const post of foodDrinkPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })
})
