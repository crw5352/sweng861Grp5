import { Charts } from "@/components/charts";
import { InternalMenu } from "@/components/internal-menu";
import { LinkButton } from "@/components/vital-link";
import { title } from "@/config.shared";
import { useUser } from "@/contexts/userContext";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: title() },
    {
      name: "description",
      content: "Login to BitFit!",
    },
  ];
};

export default function Dash() {
  const { user } = useUser();
  return (
    <main className="">
      <InternalMenu>{user && user.vitalProviders.length > 0 ? <Charts /> : <LinkButton />}</InternalMenu>
    </main>
  );
}
