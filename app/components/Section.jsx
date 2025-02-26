const Section = ({ id, title, children }) => {
    return (
      <section id={id} className="py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
      </section>
    );
  };
  
export default Section;
  