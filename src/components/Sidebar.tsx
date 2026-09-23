import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Short Bio', href: '/bio' },
    { name: 'Personal Information', href: '/personal' },
    { name: 'Qualifications', href: '/qualifications' },
    { name: 'Publications', href: '/publications' },
    { name: 'Experience', href: '/experience' },
    { name: 'Thesis Supervised', href: '/thesis' },
    { name: 'Conference/Seminar/ Course Organized', href: '/organized' },
    { name: 'Conferences/Courses/ Workshops Attended', href: '/attended' },
    { name: 'Projects', href: '/projects' },
    { name: 'Awards & Prizes', href: '/awards' },
    { name: 'Books, Book Chapters & Monographs', href: '/books' },
    { name: 'Professional Involvement', href: '/professional' },
    { name: 'H-Index of Papers', href: '/hindex' },
    { name: 'Video Courses Developed', href: '/video' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="nav-menu">
          {menuItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <a href="#" className="cv-link">Complete CV (download)</a>
      
      <div className="visitor-counter">
        <img src="https://counter.websiteout.net/compteur.php?S=0&C=1&D=9999&num=0" alt="counter" style={{ background: '#000' }} />
      </div>
    </aside>
  );
}
