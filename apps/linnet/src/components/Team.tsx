import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './social-icons'

const team = [
  {
    name: 'Roberto Peo',
    role: 'SEO Expert',
    seed: 'linnet-t1',
    skills: ['Photoshop', 'InDesign', 'Illustrator'],
    values: [90, 70, 50],
  },
  {
    name: 'Jane Doe',
    role: 'Web Developer',
    seed: 'linnet-t2',
    skills: ['React', 'TypeScript', 'Node.js'],
    values: [92, 85, 78],
  },
  {
    name: 'Jakia Khan',
    role: 'UI/UX Designer',
    seed: 'linnet-t3',
    skills: ['Figma', 'Sketch', 'Photoshop'],
    values: [88, 75, 80],
  },
  {
    name: 'Jack Kalis',
    role: 'Programmer',
    seed: 'linnet-t4',
    skills: ['Python', 'Go', 'Rust'],
    values: [85, 72, 68],
  },
]

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

export function Team() {
  return (
    <section id="team" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-500">Our Expert Team</h2>
          <p className="mt-3 text-gray-500">Meet the talented professionals behind our success.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/400`}
                alt={member.name}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-800/90 to-transparent px-4 pb-4 pt-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="font-heading text-base font-bold text-white">{member.name}</h4>
                <span className="mb-2 text-xs text-gray-300">{member.role}</span>
                {member.skills.map((skill, i) => (
                  <div key={skill} className="mb-1">
                    <div className="flex justify-between text-[10px] text-gray-300">
                      <span>{skill}</span>
                      <span>{member.values[i]}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/20">
                      <div
                        className="h-full rounded-full bg-primary-400"
                        style={{ width: `${member.values[i]}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-2 flex gap-3">
                  {socialIcons.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="text-white/70 hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
