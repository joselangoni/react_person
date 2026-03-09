export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    {person.isMarried ? (
      <p className="Person__partner">
        {person.partnerName} is my
        {person.partnerName === 'm' ? 'Husband' : 'Wife'}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
