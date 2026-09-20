import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = ['Graduate', 'Postgraduate', 'PhD Scholarships', 'Training'] as const
type Tab = (typeof tabs)[number]

interface Program {
  category: string
  title: string
  desc: string
  img: string
}

const programs: Record<Tab, Program[]> = {
  Graduate: [
    {
      category: 'Agriculture',
      title: 'Chemical Engineering',
      desc: 'Master the fundamentals of chemical processes and engineering principles.',
      img: 'https://picsum.photos/seed/sagewell-prog1/400/300',
    },
    {
      category: 'Agriculture',
      title: 'Mechanical Engineering',
      desc: 'Learn to design, build, and maintain mechanical systems.',
      img: 'https://picsum.photos/seed/sagewell-prog2/400/300',
    },
    {
      category: 'Agriculture',
      title: 'Bio Engineering',
      desc: 'Explore the intersection of biology and engineering.',
      img: 'https://picsum.photos/seed/sagewell-prog3/400/300',
    },
  ],
  Postgraduate: [
    {
      category: 'Business',
      title: 'MBA Program',
      desc: 'Advance your career with a world-class MBA.',
      img: 'https://picsum.photos/seed/sagewell-pg1/400/300',
    },
    {
      category: 'Business',
      title: 'Data Science',
      desc: 'Harness the power of data with advanced analytics.',
      img: 'https://picsum.photos/seed/sagewell-pg2/400/300',
    },
    {
      category: 'Business',
      title: 'Public Health',
      desc: 'Lead global health initiatives with cutting-edge research.',
      img: 'https://picsum.photos/seed/sagewell-pg3/400/300',
    },
  ],
  'PhD Scholarships': [
    {
      category: 'Research',
      title: 'Computer Science',
      desc: 'Push the boundaries of computational research.',
      img: 'https://picsum.photos/seed/sagewell-phd1/400/300',
    },
    {
      category: 'Research',
      title: 'Environmental Studies',
      desc: 'Address climate change through interdisciplinary research.',
      img: 'https://picsum.photos/seed/sagewell-phd2/400/300',
    },
    {
      category: 'Research',
      title: 'Physics',
      desc: 'Explore the fundamental laws of the universe.',
      img: 'https://picsum.photos/seed/sagewell-phd3/400/300',
    },
  ],
  Training: [
    {
      category: 'Professional',
      title: 'Leadership Skills',
      desc: 'Develop essential leadership and management skills.',
      img: 'https://picsum.photos/seed/sagewell-tr1/400/300',
    },
    {
      category: 'Professional',
      title: 'Digital Marketing',
      desc: 'Master modern marketing strategies and tools.',
      img: 'https://picsum.photos/seed/sagewell-tr2/400/300',
    },
    {
      category: 'Professional',
      title: 'Project Management',
      desc: 'Learn agile methodologies and project delivery.',
      img: 'https://picsum.photos/seed/sagewell-tr3/400/300',
    },
  ],
}

export function Programs() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">Popular Programs</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-colors',
                activeTab === tab
                  ? 'bg-brand-400 text-white'
                  : 'bg-gray-100 text-navy-600 hover:bg-gray-200',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs[activeTab].map((prog: Program, i: number) => (
            <div
              key={`${activeTab}-${i}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={prog.img} alt={prog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">
                  {prog.category}
                </span>
                <h4 className="text-lg font-semibold text-navy-800 mt-1 mb-2">{prog.title}</h4>
                <p className="text-sm text-navy-500 mb-4">{prog.desc}</p>
                <a
                  href="#admission"
                  className="inline-block bg-brand-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-500 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
