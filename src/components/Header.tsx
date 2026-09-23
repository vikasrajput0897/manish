import client from '../../tina/__generated__/client';

export default async function Header() {
  const res = await client.queries.home({ relativePath: 'index.md' });
  const { name, role, affiliation, email1, email2, phone, orcid, scholar, photo } = res.data.home;

  return (
    <div className="header">
      <div className="header-logo">
        <img src="/images/logo_black.png" alt="Logo" />
      </div>
      <div className="header-content">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p className="bold-maroon">{affiliation}</p>
        <p className="emails">
          E-mail: <span style={{ color: 'var(--maroon)' }}>{email1}</span>
          {email2 && <span> &nbsp; <span style={{ color: 'var(--maroon)' }}>{email2}</span></span>}
        </p>
        {phone && <p className="emails">Phone: {phone}</p>}
        {(orcid || scholar) && (
          <p style={{ fontSize: '12px', marginTop: '5px' }}>
            {orcid && <a href={orcid} target="_blank">ORCID</a>}
            {orcid && scholar && " | "}
            {scholar && <a href={scholar} target="_blank">Google Scholar</a>}
          </p>
        )}
      </div>
      <div className="header-photo">
        {photo && <img src={photo} alt={name} />}
      </div>
    </div>
  );
}
