'use client';
import { useTina } from 'tinacms/dist/react';
import { HomeQuery } from '../../tina/__generated__/types';

export default function HomeClient({
  data,
  query,
  variables,
}: {
  data: HomeQuery;
  query: string;
  variables: object;
}) {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  const {
    news,
    specialization,
    education,
    experience,
    adminExperience,
    publicationSummary,
    patents,
    supervision
  } = tinaData.home;

  return (
    <div>
      {/* News Section (Optional) */}
      {news && news.length > 0 && (
        <>
          <div className="news-section">
            <div className="news-icon">
              <img src="/images/new48.gif" alt="New" width="48" height="24" />
            </div>
            <ul className="news-list">
              {news.map((n, i) => (
                <li key={i}>{n?.item}</li>
              ))}
            </ul>
          </div>
          <hr />
        </>
      )}

      {/* Row 1: Specialization & Education */}
      <div className="section-grid">
        <div className="section-col">
          <h3 className="section-title">Area of Specialization :</h3>
          <ul className="bullet-list">
            {specialization?.map((spec, i) => (
              <li key={i}>{spec?.item}</li>
            ))}
          </ul>
        </div>
        
        <div className="section-col">
          <h3 className="section-title">Academic Education :</h3>
          <ul className="bullet-list">
            {education?.map((edu, i) => (
              <li key={i}>{edu?.item}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      {/* Row 2: Experience & Administrative Experience */}
      <div className="section-grid">
        <div className="section-col">
          <h3 className="section-title">Experience :</h3>
          <ul className="bullet-list">
            {experience?.map((exp, i) => (
              <li key={i}>{exp?.item}</li>
            ))}
          </ul>
        </div>
        
        <div className="section-col">
          <h3 className="section-title">Administrative Experience :</h3>
          <ul className="bullet-list">
            {adminExperience?.map((exp, i) => (
              <li key={i}>{exp?.item}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      {/* Row 3: Publications & Patents & Supervision */}
      <div className="section-grid" style={{ justifyContent: 'space-between' }}>
        <div className="section-col" style={{ flex: '1' }}>
          <h3 className="section-title">Publication Details :</h3>
          <ul className="bullet-list">
            {publicationSummary?.map((pub, i) => (
              <li key={i}>{pub?.item}</li>
            ))}
          </ul>
        </div>
        
        <div className="section-col" style={{ flex: '1' }}>
          <h3 className="section-title">Patents :</h3>
          <ul className="bullet-list">
            {patents?.map((pat, i) => (
              <li key={i}>{pat?.item}</li>
            ))}
          </ul>
        </div>
        
        <div className="section-col" style={{ flex: '1.5' }}>
          <h3 className="section-title">Research Supervision:</h3>
          <ul className="bullet-list">
            {supervision?.map((sup, i) => (
              <li key={i}>{sup?.item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
