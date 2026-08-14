import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CategoryList } from './CategoryList'

describe('CategoryList', () => {
  it('renders the subheading and heading', () => {
    render(<CategoryList />)
    expect(screen.getByText('Job Categories')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Top Categories' })).toBeInTheDocument()
  })

  it('renders all 16 category rows in four columns of four', () => {
    render(<CategoryList />)
    const columns = screen.getAllByRole('list')
    expect(columns).toHaveLength(4)
    for (const column of columns) {
      expect(within(column).getAllByRole('listitem')).toHaveLength(4)
    }
    expect(screen.getByRole('link', { name: /Web Development/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Software Development/ })).toBeInTheDocument()
    expect(screen.getByText('354')).toBeInTheDocument()
    expect(screen.getByText('425')).toBeInTheDocument()
  })

  it('renders every category name from the data set', () => {
    render(<CategoryList />)
    const names = [
      'Web Development',
      'Graphic Designer',
      'Multimedia',
      'Advertising',
      'Education & Training',
      'English',
      'Social Media',
      'Writing',
      'PHP Programming',
      'Project Management',
      'Finance Management',
      'Office & Admin',
      'Web Designer',
      'Customer Service',
      'Marketing & Sales',
      'Software Development',
    ]
    for (const name of names) {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toBeInTheDocument()
    }
  })
})
