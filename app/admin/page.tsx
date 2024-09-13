import Messages from "@/components/Messages";
import Sectiontitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db";

const Adminpage = async () => {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="wrapper">
      <Sectiontitle title="Messages" />
      <Messages messages={messages} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Adminpage;
