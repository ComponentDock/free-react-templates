export interface Employee {
  fullName: string
  age: string
  jobTitle: string
  location: string
}

/**
 * Employee-directory dataset (4 columns × 8 rows). The final two rows
 * repeat the first two entries — kept verbatim so the dataset stays
 * deterministic across renders and snapshot comparisons.
 */
export const employees: Employee[] = [
  {
    fullName: 'Vincent Williamson',
    age: '31',
    jobTitle: 'iOS Developer',
    location: 'Washington',
  },
  {
    fullName: 'Joseph Smith',
    age: '27',
    jobTitle: 'Project Manager',
    location: 'Somerville, MA',
  },
  {
    fullName: 'Justin Black',
    age: '26',
    jobTitle: 'Front-End Developer',
    location: 'Los Angeles',
  },
  {
    fullName: 'Sean Guzman',
    age: '25',
    jobTitle: 'Web Designer',
    location: 'San Francisco',
  },
  {
    fullName: 'Keith Carter',
    age: '20',
    jobTitle: 'Graphic Designer',
    location: 'New York, NY',
  },
  {
    fullName: 'Austin Medina',
    age: '32',
    jobTitle: 'Photographer',
    location: 'New York',
  },
  {
    fullName: 'Vincent Williamson',
    age: '31',
    jobTitle: 'iOS Developer',
    location: 'Washington',
  },
  {
    fullName: 'Joseph Smith',
    age: '27',
    jobTitle: 'Project Manager',
    location: 'Somerville, MA',
  },
]
