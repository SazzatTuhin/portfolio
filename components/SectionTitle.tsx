interface SectiontitleProps {
  title: string;
}

const Sectiontitle = ({ title }: SectiontitleProps) => {
  return <h1 className="text-5xl font-bold pb-10">{title}</h1>;
};

export default Sectiontitle;
