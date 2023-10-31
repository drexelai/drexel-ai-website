type Member = {
  name: string;
  position: string;
  image: string;
  level: string;
};

type MembersListProps = {
  members: Member[];
};

export const MembersList = ({ members }: MembersListProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member, i) => (
        <MemberCard member={member} key={i} />
      ))}
    </div>
  );
};

type MemberCardProps = {
  member: Member;
};

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="group text-center items-center h-full flex flex-col justify-end gap-4 p-6 sm:p-8">
      <img
        src={member.image}
        alt="art cover"
        loading="lazy"
        className="h-64 w-64 rounded-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
      <h3 className="flex-1 text-2xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
      <p className="flex-initial text-gray-600 dark:text-gray-300">{member.position}</p>
    </div>
  );
};
